import styles from './firstStep.module.scss'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

export default function FirstStep({data,handleChange,buttonEvent}:any){


  const createFinanceDataForm = z.object({
    type:z.string()
    .min(1,"Selecione uma categoria"),
    value:z.string()
    .min(1,"O valor é obrigatorio"),
    financedValue:z.string()
    .min(1,"O valor a ser financiado é obrigatorio")
  })

  const { register, handleSubmit, formState: { errors } } = useForm<financeData>({resolver:zodResolver(createFinanceDataForm)})

  type financeData = z.infer<typeof createFinanceDataForm>

  

    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        const formattedValue = name === 'value' ? formatNumberWithPoints(value) : '0';
        handleChange({ target: { name, value: formattedValue } });
    };

    const handleInputChange2 = (event:any) =>{
      const { name, value } = event.target;
      const formattedValue = name === 'financedValue' ? formatNumberWithPoints(value) : '0';
      handleChange({ target: { name, value: formattedValue } });
    }
    
      const formatNumberWithPoints = (value:any) => {
        const cleanValue = value.replace(/[^\d]/g, '')
        const formattedValue = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return formattedValue
      };
    

      const onSubmit = (dataForm:financeData)=>{
      data.typeOfFinancement =dataForm.type
      data.value = dataForm.value
      data.financedValue = dataForm.financedValue
      }
    
    return(
        <main className={styles.container}>
        <h3>Dados do Financiamento</h3>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="type">Qual tipo de financiamento deseja?</label>
            {errors.type && <span>{errors.type.message}</span>}
            <select 
            {...register("type")}
            onChange={handleChange}
            value={data.type}
            aria-label='Qual tipo de financiamento você deseja'
            >
              <option value="">Selecione uma categoria de financiamento</option>
              <option value="Financiamento imobiliario" aria-label='Financiamento imobiliario'>Financiamento imobiliario</option>
              <option value="Crédito com garantia de imovel" aria-label='Crédito com garantia de imovel'>Crédito com garantia de imovel</option>
            </select>
            <label htmlFor="value">Qual valor do imovel?</label>
            {errors.value && <span>{errors.value.message}</span>}
            <input 
            type="text" 
            {...register("value")}
            onChange={handleInputChange}
            value={data.value}
            aria-label='Input Qual valor do imovel?'
            />
            <label htmlFor="financedValue">Qual valor a ser financiado?</label>
            {errors.financedValue && <span>{errors.financedValue.message}</span>}
            <input 
            type="text" 
            {...register('financedValue')}
            value={data.financedValue}
            onChange={handleInputChange2}
            aria-label='Input Qual valor a ser financiado?'
            />
            <div className={styles.buttons}>
            <button disabled>Voltar</button>
            <button onClick={buttonEvent} aria-label='Próximo formulario'>Próximo</button>
            </div>
            </form>
       </main>
    )
    


}
