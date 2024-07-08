'use client'
import {useRef, useState} from "react";
import FirstStep from "@/components/firstStepForm";
import SecondStep from "@/components/secondStepForm";
import emailjs from '@emailjs/browser'
import styles from './page.module.scss'
import Link from "next/link";
import Image from "next/image";
import closeIcon from '@/public/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'

export default function Simulation() {

  const initialFormData={
    name: '',
    type: '',
    value: '',
    email: '',
    phone: '',
    date: ''
  }

  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState(initialFormData)
  const modalRef = useRef<HTMLDivElement>(null)
  
  const date = new Date(formData.date)
  const day = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()
  let fullDate;
  
  if(day<10){
  fullDate = `0${day}/0${month}/${year}`
  }else{
  fullDate =  `${day}/${month}/${year}`
  }

  const templateParams = {
  typeOfFinancement: formData.type,
  value: formData.value,
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  birthday: fullDate
}

  const prevStep = () => setCurrentStep((prevStep)=>prevStep-1);

  const handleChange = (e:any)=>{
    const {name,value} = e.target
    setFormData({...formData, [name]:value})
  }

 
  const serviceId:any= process.env.NEXT_PUBLIC_MY_SERVICE_ID
  const templateId:any=process.env.NEXT_PUBLIC_MY_TEMPLATE_ID
  const publicKey:any=process.env.NEXT_PUBLIC_MY_PUBLIC_KEY


  const nextStep = () => {
    if(formData.type!=='' && formData.value!=='' && currentStep===0){
      setCurrentStep(currentStep + 1);
    }else if(formData.type!=='' && formData.value!=='' && formData.name!=='' && formData.phone!=='' && formData.email!==''&& formData.date!=='' && currentStep===1){
      if(modalRef.current){
        emailjs.send(
           serviceId,
           templateId,
           templateParams,
          {
            publicKey: publicKey,
          }
        )
        modalRef.current.style.display ='flex'
      }
    }else{   
  }
}

const closeModal= ()=>{
  if(modalRef.current){
    modalRef.current.style.display = 'none'
  }
}

  const steps = [ 
    <FirstStep handleChange={handleChange} data={formData} key={'null'} buttonEvent={nextStep}/>,
    <SecondStep handleChange={handleChange} data={formData} key={'null'} simulateEvent={nextStep} backStep ={prevStep}/>
  ]

  return (
    <main className={styles.form}>  
    <Link href={'/'}>Voltar</Link>
    <div>
    {steps[currentStep]}
    </div>
    <div className={styles.modal} ref={modalRef}>
      <p>Um consultor ja foi notificado aguarde o contato!</p>
      <p>Ele ira te contatar via e-mail ou telefone</p>
     
      <button onClick={closeModal}>Fechar</button>
      <Image
      width={32}
      height={32}
      alt="close modal icon"
      src={closeIcon}
      onClick={closeModal}
      />
    </div>
    </main>
  );
}
