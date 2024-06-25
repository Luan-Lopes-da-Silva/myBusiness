import styles from './secondStep.module.scss'

const SecondStep =({data,handleChange,nameMessage,emailMessage,phoneMessage,birthdayMessage,inputName,inputEmail,inputPhone,inputBirthday}:any)=>(
   <main className={styles.container}>
      <h3>Dados pessoais</h3>
     <form className={styles.form}>
        <label htmlFor="name">Seu nome</label>
        <span ref={nameMessage}></span>
        <input 
        type="text" 
        value={data.name || ''}
        name="name"
        id="name"
        onChange={handleChange}
        ref={inputName}
        />
        <label htmlFor="email">Seu email</label>
        <span ref={emailMessage}></span>
        <input
        type="text" 
        name="email"
        id="email"
        value={data.email || ''}
        onChange={handleChange}
        ref={inputEmail}
        />
        <label htmlFor="phone">Seu telefone</label>
        <span ref={phoneMessage}></span>
        <input 
        type="text" 
        name="phone"
        id="phone"
        value={data.phone || ''}
        onChange={handleChange}
        ref={inputPhone}
        />
        <label htmlFor="birthday">Sua data de nascimento</label>
        <span ref={birthdayMessage}></span>
        <input 
        type="date" 
        name="birthday" 
        id="birthday" 
        value={data.birthday}
        onChange={handleChange}
        ref={inputBirthday}
        />
    </form>
   </main>
)



export default SecondStep