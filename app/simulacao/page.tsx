'use client'
import { useRef, useState} from "react";
import FirstStep from "@/components/FirstStepForm";
import SecondStep from "@/components/secondStepForm";
import emailjs from '@emailjs/browser'
import styles from './page.module.scss'
import Link from "next/link";

export default function Home() {
  type TemplateEmail={
    name: string,
    type: string,
    value: string,
    email: string,
    phone: string,
    birthday: string
  }

  const initialFormData:TemplateEmail={
    name: '',
    type: '',
    value: '',
    email: '',
    phone: '',
    birthday: ''
  }
  
  const valueMessage = useRef<HTMLSpanElement>(null)
  const typeMessage =  useRef<HTMLSpanElement>(null)
  const inputValue = useRef<HTMLInputElement>(null)
  const inputType = useRef<HTMLInputElement>(null)  

  const nameMessage =  useRef<HTMLSpanElement>(null)
  const emailMessage =  useRef<HTMLSpanElement>(null)
  const phoneMessage =  useRef<HTMLSpanElement>(null)
  const birthdayMessage =  useRef<HTMLSpanElement>(null)
  const inputName= useRef<HTMLInputElement>(null)
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPhone = useRef<HTMLInputElement>(null)
  const inputBirthday = useRef<HTMLInputElement>(null)

  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<TemplateEmail>(initialFormData)
  
const templateParams = {
  typeOfFinancement: formData.type,
  value: formData.value,
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  birthday: formData.birthday
}


const handleClick = async() => {
  formRef.current?.addEventListener('submit',(ev:any)=>{
    ev.preventDefault()
  })
  if(currentStep===steps.length-1 && formData.name === '' && inputName.current && nameMessage.current  && formData.email === '' && inputEmail.current && emailMessage.current 
    && formData.phone === '' && inputPhone.current && phoneMessage.current && formData.birthday === '' && inputBirthday.current && birthdayMessage.current){
         inputName.current.style.borderColor = '#d90429'
         nameMessage.current.innerText = 'Preencha o campo'
         inputEmail.current.style.borderColor = '#d90429'
        emailMessage.current.innerText = 'Preencha o campo'
        inputPhone.current.style.borderColor = '#d90429'
    phoneMessage.current.innerText = 'Preencha o campo'
    inputBirthday.current.style.borderColor = '#d90429'
    birthdayMessage.current.innerText = 'Preencha o campo'
  }
  else if(currentStep===steps.length-1 && formData.name === '' && inputName.current && nameMessage.current ){
   inputName.current.style.borderColor = '#d90429'
   nameMessage.current.innerText = 'Preencha o campo'
  }else if(currentStep===steps.length-1 && formData.email === '' && inputEmail.current && emailMessage.current){
    inputEmail.current.style.borderColor = '#d90429'
    emailMessage.current.innerText = 'Preencha o campo'
  }else if(currentStep===steps.length-1 && !formData.email.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') && inputEmail.current && emailMessage.current){
    inputEmail.current.style.borderColor = '#d90429'
    emailMessage.current.innerText = 'Formato de e-mail invalido'
  }else if(currentStep===steps.length-1 && formData.phone === '' && inputPhone.current && phoneMessage.current){
    inputPhone.current.style.borderColor = '#d90429'
    phoneMessage.current.innerText = 'Preencha o campo'
  }else if(currentStep===steps.length-1 && formData.birthday === '' && inputBirthday.current && birthdayMessage.current){
    inputBirthday.current.style.borderColor = '#d90429'
    birthdayMessage.current.innerText = 'Preencha o campo'
  }
    else if (
      currentStep===steps.length-1 && formData.email.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') 
    && inputBirthday.current && inputEmail.current && inputName.current && inputPhone.current
    && birthdayMessage.current && phoneMessage.current && emailMessage.current && nameMessage.current
    ) {
      inputBirthday.current.style.borderColor = 'inherit'
      inputPhone.current.style.borderColor = 'inherit'
      inputName.current.style.borderColor = 'inherit'
      inputEmail.current.style.borderColor = 'inherit'
      emailMessage.current.innerText = ''
      nameMessage.current.innerText = ''
      phoneMessage.current.innerText = ''
      birthdayMessage.current.innerText = ''
      

      setTimeout(() => {
        alert('Um consultor ja foi notificado aguarde o contato!')
      }, 2000);
      emailjs.send(
        'service_lrwkc6w',
        'template_qwvda52',
        templateParams,
        {
          publicKey: 'Wz70DHahVOAsSQMYv',
        }
      )
    } else {
      nextStep();
    }
};

  const prevStep = () => setCurrentStep((prevStep)=>prevStep-1);

  const handleChange = (e:any)=>{
    const {name,value} = e.target
    setFormData({...formData, [name]:value})
  }


  const formRef = useRef<HTMLFormElement>(null)

  const steps = [ 
    <FirstStep handleChange={handleChange} data={formData} key={'null'} valueMessage = {valueMessage} typeMessage ={typeMessage} inputValue={inputValue} inputType={inputType}/>,
    <SecondStep handleChange={handleChange} data={formData} key={'null'} 
    nameMessage ={nameMessage} emailMessage ={emailMessage} phoneMessage={phoneMessage} birthdayMessage={birthdayMessage}
    inputName={inputName} inputEmail={inputEmail} inputPhone={inputPhone} inputBirthday={inputBirthday}
    />
  ]



  const nextStep = () => {
    if(currentStep < steps.length - 1 && formData.type === '' && typeMessage.current && inputType.current && formData.value === '' && valueMessage.current && inputValue.current){
      typeMessage.current.innerText = 'Preencha o campo'
      inputType.current.style.borderColor = '#d90429'
      valueMessage.current.innerText = 'Preencha o campo'
      inputValue.current.style.borderColor = '#d90429'
    }
    else if(currentStep < steps.length - 1 && formData.type === '' && typeMessage.current && inputType.current){
      typeMessage.current.innerText = 'Preencha o campo'
      inputType.current.style.borderColor = '#d90429'

   }else if(currentStep < steps.length - 1 && formData.value === '' && valueMessage.current && inputValue.current){
      valueMessage.current.innerText = 'Preencha o campo'
      inputValue.current.style.borderColor = '#d90429'
    }
   else {
      setCurrentStep(currentStep + 1);
    }
   
    }



  return (
    <main className={styles.form}>  
    <Link href={'/'}>Voltar</Link>
     <form ref={formRef}>
     {steps[currentStep]}
     <div className={styles.buttons}>
      <button onClick={prevStep} disabled={currentStep === 0}>Voltar</button>
      <button onClick={handleClick} 
      >{currentStep===steps.length-1? 'Simular' : 'Proximo'}
      </button>
     </div>
    </form>
    </main>
  );
}
