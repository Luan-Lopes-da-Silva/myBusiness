'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


export default function Home() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [birthday,setBirthday] = useState('')
  const form = useRef<HTMLFormElement>(null)

  function sendEmail(ev:any){
  ev.preventDefault()
    emailjs
    .sendForm('service_lrwkc6w','template_qwvda52',ev.target,{
      publicKey:'Wz70DHahVOAsSQMYv'
    }).then(()=>{
      console.log('sucess')
    },
    (error)=>{
      console.log('Failed', error.text)
    }
    )
  }

  return (
    <main>  
   <form ref={form} onSubmit={sendEmail}>
   <label htmlFor="name">Seu nome</label>
      <input 
      type="text" 
      value={name}
      name="name"
      onChange={(ev)=>setName(ev.currentTarget.value)}
      />
      <label htmlFor="email">Seu email</label>
      <input 
      type="text" 
      value={email}
      name="email"
      onChange={(ev)=>setEmail(ev.currentTarget.value)}
      />
      <label htmlFor="phone">Seu telefone</label>
      <input 
      type="text" 
      value={phone}
      name="phone"
      onChange={(ev)=>setPhone(ev.currentTarget.value)}
      />
      <label htmlFor="birthday">Sua data de nascimento</label>
      <input 
      type="date"
      value={birthday}
      name="birthday"
      onChange={(ev)=>setBirthday(ev.currentTarget.value)}
      />  
      <button>Simular</button>
   </form>
    </main>
  );
}
