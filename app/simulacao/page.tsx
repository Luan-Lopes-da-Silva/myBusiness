'use client'
import { useRef, useState, useEffect } from "react";
import FirstStep from "@/components/firstStepForm";
import SecondStep from "@/components/secondStepForm";
import emailjs from '@emailjs/browser'


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
    if (currentStep===steps.length-1) {
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
  const prevStep = () => setCurrentStep((prevStep)=>prevStep-1)

  const handleChange = (e:any)=>{
    const {name,value} = e.target
    setFormData({...formData, [name]:value})
  }


  const formRef = useRef<HTMLFormElement>(null)

  const steps = [ 
    <FirstStep handleChange={handleChange} data={formData} key={'null'}/>,
    <SecondStep handleChange={handleChange} data={formData} key={'null'}/>
  ]

  let firstForm:any;

  useEffect(() => {
    const form = formRef.current;

    if (currentStep === 1) {
      form?.addEventListener('submit', sendEmail);
    } else {
      firstForm = form?.querySelector('div')
      form?.addEventListener('submit', (ev) => ev.preventDefault());
    }

    return () => {
      form?.removeEventListener('submit', sendEmail);
      form?.removeEventListener('submit', (ev) => ev.preventDefault());
    };
  }, [currentStep, steps.length]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
    } else {
        console.log('Simulação Completa');
    }
};

const sendEmail = (ev:any)=>{
ev.preventDefault()
console.log(firstForm)
}


  return (
    <main>  
     <form ref={formRef}>
     {steps[currentStep]}
     <button onClick={prevStep} disabled={currentStep === 0}>Voltar</button>
     <button onClick={handleClick} 
    >{currentStep===steps.length-1? 'Simular' : 'Próximo'}</button>
    </form>
    </main>
  );
}
