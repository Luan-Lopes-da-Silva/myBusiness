'use client'
import styles from "./page.module.scss";
import Link from "next/link";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import Image from "next/image";
import twitterIcon from '@/public/icons8-twitter.svg'
import instaIcon from '@/public/icons8-instagram.svg'
import linkedinIcon from '@/public/icons8-linkedin.svg'
import wppIcon from '@/public/icons8-whatsapp.svg'
import emailIcon from '@/public/mail_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import phoneIcon from '@/public/call_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import scheduleIcon from '@/public/schedule_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import fakeLogo from '@/public/fakelogo.svg'
import financementImage from '@/public/mika-baumeister-bGZZBDvh8s4-unsplash.jpg'
import creditImage from '@/public/maria-ziegler-jJnZg7vBfMs-unsplash (1).jpg'
import ownerImage from '@/public/owner.svg'
import partnerImage from '@/public/partner.svg'
import businessMan from '@/public/nathan-costa-T8Q8znYdbDw-unsplash.jpg'

export default function Home() {
  return (
   <main>
    <header className={styles.header}>
      <nav>
        <div>
          <Image
          alt="fake logo"
          width={100}
          height={100}
          src={fakeLogo}
          />
        </div>
        <ul>
          <Link href={'/'}>Inicio</Link>
          <Link href={'#sobre'}>Sobre</Link>
          <Link href={'#modalidades'}>Modalidades</Link>
          <Link href={'/simulacao'}>SIMULAR</Link>
        </ul>
      </nav>
    </header>


      <section className={styles.headerPresentation}>
        <div className={styles.infos}>
        <h1>Revolucionando Seu Sonho de Casa Própria</h1>
        <h4>Benefícios Exclusivos e Facilidade Incomparável no Seu Financiamento Imobiliário</h4>
        <button><Link href={'/simulacao'}>Simule Ja</Link></button>
        </div>
      </section>
    
     
      <section id="modalidades" className={styles.section}>
      <h2>Modalidades de financiamento</h2>

      <div className={styles.containerModalities}>
        <div className={styles.modality}>
          <Image 
          width={300}
          height={300}
          alt="financement image"
          src={financementImage}
          />
          <div>
          <h3>Financiamento imobiliario</h3>
          <p>O financiamento imobiliário é um empréstimo de longo prazo destinado à aquisição de imóveis residenciais ou comerciais. Os bancos e outras instituições financeiras fornecem o capital necessário para a compra, enquanto o comprador se compromete a pagar o valor emprestado em parcelas mensais que incluem juros e outros encargos. Esse tipo de financiamento permite que pessoas comprem imóveis mesmo sem possuir o valor total necessário. O processo geralmente envolve uma análise de crédito, avaliação do imóvel e a definição de termos como o prazo de pagamento e a taxa de juros, que podem ser fixas ou variáveis.</p>
          </div>
        </div>
        <div className={styles.modality2}>
         <div>
         <h3>Crédito com garantia de imovel</h3>
         <p>O crédito com garantia de imóvel, também conhecido como home equity, é um tipo de empréstimo onde o tomador usa um imóvel quitado ou financiado como garantia para obter crédito. Esse tipo de financiamento permite acesso a valores mais altos e prazos mais longos, com taxas de juros geralmente mais baixas comparadas a outras modalidades de crédito pessoal. Os recursos obtidos podem ser utilizados para diversas finalidades, como reforma de imóveis, investimentos, educação, quitação de dívidas e outros projetos pessoais ou empresariais. Caso o tomador não consiga cumprir com as obrigações de pagamento, o imóvel pode ser tomado pela instituição financeira para quitar a dívida.</p>
         </div>
          <Image
          width={300}
          height={300}
          alt="credit image"
          src={creditImage}
          />
        </div>
      </div>
      </section>

      <section className={styles.section}>
      <h2>Quais são os beneficios de fechar com a WALL-I?</h2>
        <div className={styles.benefits}>
          <div className={styles.benefitContainer}>
          <p>1.Taxas de Juros Competitivas: Wall-i oferece algumas das menores taxas de juros do mercado, tornando seu financiamento mais acessível.</p>
        <p>2.Aprovação Rápida: Processo de aprovação ágil que garante que você tenha uma resposta em até 24 horas.</p>
        <p>3.Flexibilidade de Pagamento: Planos de pagamento personalizados para se ajustarem à sua situação financeira, com opções de prazos variando de 5 a 30 anos.</p>
        <p>4.Consultoria Personalizada: A equipe de especialistas em financiamento da Wall-i oferece consultoria gratuita para ajudar a escolher a melhor opção de financiamento.</p>
      <p>5.Portal Online Intuitivo: Um portal online fácil de usar, onde você pode acompanhar o status do seu financiamento, fazer pagamentos e gerenciar sua conta.</p>
      <p>6.Seguro Residencial Gratuito: Ao fazer um financiamento com a Wall-i, você recebe um ano de seguro residencial gratuito.</p>
       
          </div>
      <Image
      width={500}
      height={600}
      src={businessMan}
      alt="Business man"
      />
        <div className={styles.benefitContainer}>
        <p>7.Amortização Antecipada: Opção de amortização antecipada sem multas ou taxas adicionais.</p>
        <p>8.Programa de Fidelidade: Descontos exclusivos e benefícios adicionais para clientes recorrentes da Wall-i.</p>
        <p>9.Aplicativo Móvel: Um aplicativo móvel que permite que você gerencie seu financiamento de qualquer lugar, a qualquer hora.</p>
        <p>10.Parcerias com Construtoras: Descontos especiais em imóveis de construtoras parceiras da Wall-i.</p>
        <p>11.Suporte 24/7: Suporte ao cliente disponível 24 horas por dia, 7 dias por semana, para responder a qualquer dúvida ou problema.</p>
        <p>12.Cashback: Receba cashback em compras realizadas com parceiros da Wall-i, ajudando a reduzir ainda mais o custo do seu financiamento.</p>  
        </div>
        </div>
      </section>

      <section className={styles.partners}>
        <h2>Nossos parceiros</h2>
          <div className={styles.partner}>
            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>
            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>
            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>
            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>
            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>
            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>
            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>
            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>
            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>
            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>

            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>

            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div>
            <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div> <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div> <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div> <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div> <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div> <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div> <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div> <div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </div> 
           
          </div>
      </section>


    <section id="sobre" className={styles.section}>
      <h2>Nossa História</h2>

     <div className={styles.about}>
      <Image
      width={300}
      height={600}
      src={ownerImage}
      alt="owner image"
      />
      <p>Fundada em 2010 por visionários do setor financeiro e imobiliário, a Wall-i surgiu com a missão de transformar a experiência de financiamento de imóveis. Desde o início, a empresa se destacou por sua abordagem inovadora e centrada no cliente, quebrando barreiras e simplificando processos que antes eram considerados complexos e burocráticos.
      A Wall-i começou sua jornada em um pequeno escritório na cidade de São Paulo, com uma equipe dedicada de apenas 10 pessoas. Com a visão de oferecer soluções financeiras acessíveis e transparentes, a empresa rapidamente ganhou a confiança de seus primeiros clientes, tornando-se sinônimo de segurança e eficiência no mercado imobiliário.
      Ao longo dos anos, a Wall-i investiu fortemente em tecnologia e inovação. Em 2012, lançou seu primeiro portal online, permitindo que os clientes acompanhassem o status de seus financiamentos de forma prática e intuitiva. Em 2015, com a criação de um aplicativo móvel, a empresa consolidou sua presença digital, oferecendo ainda mais conveniência e acesso à informação.
      </p>
     </div>
      </section>
    <footer className={styles.footer}>
      <div className={styles.infos}>
      <Image
          alt="fake logo"
          width={100}
          height={100}
          src={fakeLogo}
      />
        <div className={styles.info}>
        <Image
        src={emailIcon}
        width={16}
        height={16}
        alt="email icon"
        />
        <p>kaiques.goncalves@gmail.com</p>
       
        </div>

        <div className={styles.info}>
        <Image
        src={phoneIcon}
        width={16}
        height={16}
        alt="phone icon"
        />
        <p>(11) 95045-3953</p>
       
        </div>

        <div className={styles.info}>
        <Image
        src={scheduleIcon}
        width={16}
        height={16}
        alt="schedule icon"
        />
        <p>Segunda a Sexta 8:00 as 17:00 <br />Sábado 8:00 as 12:00</p>
        <p></p>
       
        </div>
      </div>

      <div className={styles.icons}>
        <Image
        height={36}
        width={36}
        alt="twitter icon"
        src={twitterIcon}
        />
        <Image
           height={36}
           width={36}
           alt="linkedin icon"
           src={linkedinIcon}
        />
        
        <Link href={'https://w.app/AJ0Kcf'}>
          <Image
             height={36}
             width={36}
             alt="wpp icon"
             src={wppIcon}
          />
        </Link>
             <Image
           height={36}
           width={36}
           alt="instagram icon"
           src={instaIcon}
        />
    
      </div>
    </footer>
   </main>
  )
}
