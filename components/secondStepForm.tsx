const SecondStep =({data,handleChange}:any)=>(
    <div>
        <label htmlFor="name">Seu nome</label>
        <input 
        type="text" 
        value={data.name || ''}
        name="name"
        id="name"
        onChange={handleChange}
        />
        <label htmlFor="email">Seu email</label>
        <input 
        type="text" 
        name="email"
        id="email"
        value={data.email || ''}
        onChange={handleChange}
        />
        <label htmlFor="phone">Seu telefone</label>
        <input 
        type="text" 
        name="phone"
        id="phone"
        value={data.phone || ''}
        onChange={handleChange}
        />
        <label htmlFor="birthday">Sua data de nascimento</label>
        <input 
        type="date" 
        name="birthday" 
        id="birthday" 
        value={data.birthday}
        onChange={handleChange}
        />
    </div>
)



export default SecondStep