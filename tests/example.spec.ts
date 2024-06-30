import { test, expect } from '@playwright/test';

test('has title simulation page', async ({ page }) => {
  await page.goto('http://localhost:3000/simulacao');

  await expect(page).toHaveTitle(/Wall-I Simulação/);
});

test('has title home page',async({page})=>{
  await page.goto('http://localhost:3000/')

  await expect(page).toHaveTitle(/Wall-I Home/)
})


test('get simulation page', async ({page})=>{
  await page.goto('http://localhost:3000/')

  await page.getByRole('link',{name:'Simular'}).click()

  await expect(page).toHaveTitle(/Wall-I Simulação/)
})


test('validate email format', async({page})=>{
  await page.goto('http://localhost:3000/simulacao');

  await page.getByLabel('Qual tipo de financiamento deseja?').selectOption('Financiamento Imobiliario')

  await page.getByLabel('Qual valor deseja?').fill('489498489489489498')

  await page.getByRole('button', {name:'PROXIMO'}).click()

  await expect(page.getByText('Dados pessoais')).toBeVisible()

  await page.getByLabel('Seu nome').fill('Luan Lopes')

  await page.getByLabel('Seu email').fill('sdasdasdasdas')

  await page.getByRole('button', {name:'SIMULAR'}).click()

  await expect(page.getByText('Formato de e-mail invalido')).toBeVisible()
})

test('check send email', async({page})=>{
  await page.goto('http://localhost:3000/simulacao');

  await page.getByLabel('Qual tipo de financiamento deseja?').selectOption('Financiamento Imobiliario')

  await page.getByLabel('Qual valor deseja?').fill('489498489489489498')

  await page.getByRole('button', {name:'PROXIMO'}).click()

  await expect(page.getByText('Dados pessoais')).toBeVisible()

  await page.getByLabel('Seu nome').fill('Luan Lopes')

  await page.getByLabel('Seu email').fill('lopesluan18@outlook.com')

  await page.getByLabel('Seu telefone').fill('11959113040')

  await page.getByLabel('Sua data de nascimento').fill('2000-02-03')

  await page.getByRole('button', {name:'SIMULAR'}).click()

  await expect(page.getByRole('alert')).toBeVisible()
})


test('go to home page',async({page})=>{
  await page.goto('http://localhost:3000/simulacao');

  await page.getByRole('link',{name:"VOLTAR"}).click()

  await expect(page).toHaveTitle(/Wall-I Home/)
})



