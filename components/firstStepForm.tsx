import styles from './firstStep.module.scss'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

export default function FirstStep({data,handleChange,buttonEvent}:any){


  const createFinanceDataForm = z.object({
    type:z.string()
    .min(1,"Selecione uma categoria"),
    value:z.string()
    .min(1,"O valor é obrigatorio")
  })

  const { register, handleSubmit, formState: { errors } } = useForm<financeData>({resolver:zodResolver(createFinanceDataForm)})

  type financeData = z.infer<typeof createFinanceDataForm>

  

    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        const formattedValue = name === 'value' ? formatNumberWithCommas(value) : value;
        event.target.value = formattedValue
        handleChange({ target: { name, value: formattedValue } });
      };
    
      const formatNumberWithCommas = (value:any) => {
        const cleanValue = value.replace(/[^0-9.]/g, '');
        return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };
    

      const onSubmit = (dataForm:financeData)=>{
      data.typeOfFinancement =dataForm.type
      data.value = dataForm.value
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
            >
              <option value="">Selecione uma categoria de financiamento</option>
              <option value="Financiamento imobiliario">Financiamento imobiliario</option>
              <option value="
Crédito com garantia de imovel">
Crédito com garantia de imovel</option>
            </select>
            <label htmlFor="value">Qual valor deseja?</label>
            {errors.value && <span>{errors.value.message}</span>}
            <input 
            type="text" 
            {...register("value")}
            onChange={handleInputChange}
            value={data.value}
            />
            <div className={styles.buttons}>
            <button disabled>Voltar</button>
            <button onClick={buttonEvent}>Próximo</button>
            </div>
            </form>
       </main>
    )
    


}
