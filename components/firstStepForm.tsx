import styles from './firstStep.module.scss'

const FirstStep = ({data,handleChange,typeMessage,valueMessage,inputValue,inputType}:any)=>(
   <main className={styles.container}>
    <h3>Dados do Financiamento</h3>
     <div className={styles.form}>
        <label htmlFor="type">Qual tipo de financiamento deseja?</label>
        <span ref={typeMessage}></span>
        <select 
        name="type" 
        id="type" 
        value={data.type}
        onChange={handleChange}
        ref={inputType}
        >
            <option selected>Selecione uma opção de financiamento</option>
            <option value={'financiamento'}>Financiamento Imobiliario</option>
            <option value="credito">Crédito com garantia de imovel.</option>
            </select>
        
        <label htmlFor="value">Qual valor deseja?</label>
        <span ref={valueMessage}></span>
        <input 
        type="text" 
        name="value"
        id="value"
        value={data.value || 'R$ 0,00'}
        onChange={handleChange}
        ref={inputValue}
        />
    </div>
   </main>
)

export default FirstStep