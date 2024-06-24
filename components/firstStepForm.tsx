const FirstStep = ({data,handleChange}:any)=>(
    <div>
        <label htmlFor="type">Qual tipo de financiamento deseja?</label>
        <select 
        name="type" 
        id="type" 
        value={data.type}
        onChange={handleChange}>
            <option selected>Selecione uma opção de financiamento</option>
            <option value={'financiamento'}>Financiamento Imobiliario</option>
            <option value="credito">Crédito com garantia de imovel.</option>
        </select>
        
        <label htmlFor="value">Qual valor deseja?</label>
        <input 
        type="text" 
        name="value"
        id="value"
        value={data.value || 'R$ 0,00'}
        onChange={handleChange}
        />
    </div>
)

export default FirstStep