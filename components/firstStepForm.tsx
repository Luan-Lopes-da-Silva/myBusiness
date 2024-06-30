import styles from './firstStep.module.scss'

export default function FirstStep({data,handleChange,typeMessage,valueMessage,inputValue,inputType}:any){
    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        const formattedValue = name === 'value' ? formatNumberWithCommas(value) : value;
        handleChange({ target: { name, value: formattedValue } });
      };
    
      const formatNumberWithCommas = (value:any) => {
        const cleanValue = value.replace(/[^0-9.]/g, '');
        return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };
    
    
    return(
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
            defaultValue={'Selecione uma opção de financiamento'}
            >
                <option value={'Financiamento Imobiliario'}>Financiamento Imobiliario.</option>
                <option value="Crédito com garantia de imovel">Crédito com garantia de imovel.</option>
                </select>
            
            <label htmlFor="value">Qual valor deseja?</label>
            <span ref={valueMessage}></span>
            <input 
            type="text" 
            name="value"
            id="value"
            value={data.value}
            onChange={handleInputChange}
            ref={inputValue}
            />
        </div>
       </main>
    )
    


}
