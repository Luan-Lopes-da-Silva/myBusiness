'use client'
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import twitterIcon from '@/public/icons8-twitter.svg'
import instaIcon from '@/public/icons8-instagram.svg'
import wppIcon from '@/public/icons8-whatsapp.svg'
import emailIcon from '@/public/mail_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import phoneIcon from '@/public/call_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import scheduleIcon from '@/public/schedule_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import fbIcon from '@/public/5282541_fb_social media_facebook_facebook logo_social network_icon (1).svg'
import financementImage from '@/public/mika-baumeister-bGZZBDvh8s4-unsplash.jpg'
import creditImage from '@/public/maria-ziegler-jJnZg7vBfMs-unsplash (1).jpg'
import ownerImage from '@/public/owner.svg'
import businessMan from '@/public/nathan-costa-T8Q8znYdbDw-unsplash.jpg'
import { Variants,motion } from "framer-motion";
import bradescoSvg from '@/public/bradesco.svg'
import santanderSvg from '@/public/banco-santander-logo.svg'
import interSvg from '@/public/inter.svg'
import itauSvg from '@/public/itau-fundo-azul.svg'
import * as gtag from "@/lib/gtag"
import useWindowSize from '@/app/utils/useWindowSize'

export default function Home() {
  const size = useWindowSize()
  const introHeaderVariants: Variants ={
    hide:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        duration:2,
      }
    }
  }

  const introPictureVariants: Variants = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};

  const animateText: Variants = {
    hide:{
      opacity:0,
    },
    show: {
      opacity: 1,
      transition: {
          duration: 2,
      },
  },
  }; 

  const animatePhoto: Variants = {
    hide:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        duration:2
      }
    }
  }

  const trackEvent = (ev:any) =>{
    gtag.event({
      action: 'click',
      category: 'Button',
      label: 'Social media button',
      page_location:ev.currentTarget.href,
      value:1
    })
  }

return( 
  <>
  {size.width<1000?(<main className={styles.container}>
    <header className={styles.header}>
      <nav>
        <div>
        <h1>LOGO</h1>
        </div>
        <ul>
          <Link href={'/'}>Inicio</Link>
          <Link href={'#sobre'} aria-label="Link que leva direto a section sobre nossa empresa">Sobre</Link>
          <Link href={'/simulacao'} aria-label="Link que leva direto a pagina de simulação">SIMULAR</Link>
        </ul>
      </nav>
    </header>


      <section className={styles.headerPresentation}>
        <div className={styles.infos}>
        <h1>Revolucionando Seu Sonho de Casa Própria</h1>
        <h4>Benefícios Exclusivos e Facilidade Incomparável no Seu Financiamento Imobiliário</h4>
        <button><Link href={'/simulacao'} aria-label="Botão que leva direto a pagina de simulação">Simule Ja</Link></button>
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
          <motion.div>
          <h3>Financiamento imobiliario</h3>
          <p>O financiamento imobiliário é um empréstimo de longo prazo destinado à aquisição de imóveis residenciais ou comerciais. Os bancos e outras instituições financeiras fornecem o capital necessário para a compra, enquanto o comprador se compromete a pagar o valor emprestado em parcelas mensais que incluem juros e outros encargos. Esse tipo de financiamento permite que pessoas comprem imóveis mesmo sem possuir o valor total necessário. O processo geralmente envolve uma análise de crédito, avaliação do imóvel e a definição de termos como o prazo de pagamento e a taxa de juros, que podem ser fixas ou variáveis.</p>
          </motion.div>
        </div>
        <div className={styles.modality2}
        >
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
      <h2>Quais são os beneficios de fechar conosco?</h2>
        <div className={styles.benefits}>
          <div className={styles.benefitContainer}
          >
          <p>1.Oferecemos algumas das menores taxas de juros do mercado, tornando seu financiamento mais acessível.</p>
          <p>2.Processo de aprovação ágil que garante que você tenha uma resposta em até 24 horas.</p>
          <p>3.Planos de pagamento personalizados para se ajustarem à sua situação financeira, com opções de prazos variando de 5 a 30 anos.</p>
          <p>4.A equipe de especialistas em financiamento daoferece consultoria gratuita para ajudar a escolher a melhor opção de financiamento.</p>
          <p>5.Um portal online fácil de usar, onde você pode acompanhar o status do seu financiamento, fazer pagamentos e gerenciar sua conta.</p>
          <p>6.Ao fazer um financiamento conosco você recebe um ano de seguro residencial gratuito.</p>
       
          </div>
            <div
            >
            <Image
      width={500}
      height={600}
      src={businessMan}
      alt="Business man"
      />
            </div>
        <div className={styles.benefitContainer}
        >
        <p>7.Opção de amortização antecipada sem multas ou taxas adicionais.</p>
        <p>8.Descontos exclusivos e benefícios adicionais para clientes recorrentes da Wall-i.</p>
        <p>9.Um aplicativo móvel que permite que você gerencie seu financiamento de qualquer lugar, a qualquer hora.</p>
        <p>10.Descontos especiais em imóveis de construtoras parceiras da Wall-i.</p>
        <p>11.Suporte ao cliente disponível 24 horas por dia, 7 dias por semana, para responder a qualquer dúvida ou problema.</p>
        <p>12.Receba cashback em compras realizadas com parceiros da Wall-i, ajudando a reduzir ainda mais o custo do seu financiamento.</p>  
        </div>
        </div>
      </section>

      <section className={styles.partners}>
          <div className={styles.partner}>
          <Link href={'/simulacao'}> 
          <Image
           width={50}
           height={50}
           alt="itau svg"
           src={itauSvg}
           />
          </Link>

          
          <Link href={'/simulacao'}>
          <Image
           width={50}
           height={50}
           alt="bradesco svg"
           src={bradescoSvg}
           />
          </Link>

          <Link href={'/simulacao'}>
          <Image
           width={50}
           height={50}
           alt="santander svg"
           src={santanderSvg}
           />
          </Link>
          

          <Link href={'/simulacao'}>
          <Image
           width={50}
           height={50}
           alt="inter svg"
           src={interSvg}
          />
          </Link>

           
          </div>
      </section>


    <section id="sobre" className={styles.section}>
      <motion.h2
      >Nossa História</motion.h2>
     <div className={styles.about}>
      <motion.div
      >
      <Image
      width={300}
      height={600}
      src={ownerImage}
      alt="owner image"
      />
      </motion.div>
      <motion.div 
      >
      <p>Fundada em 2010 por visionários do setor financeiro e imobiliário, a Wall-i surgiu com a missão de transformar a experiência de financiamento de imóveis. Desde o início, a empresa se destacou por sua abordagem inovadora e centrada no cliente, quebrando barreiras e simplificando processos que antes eram considerados complexos e burocráticos.
      A Wall-i começou sua jornada em um pequeno escritório na cidade de São Paulo, com uma equipe dedicada de apenas 10 pessoas. Com a visão de oferecer soluções financeiras acessíveis e transparentes, a empresa rapidamente ganhou a confiança de seus primeiros clientes, tornando-se sinônimo de segurança e eficiência no mercado imobiliário.
      Ao longo dos anos, a Wall-i investiu fortemente em tecnologia e inovação. Em 2012, lançou seu primeiro portal online, permitindo que os clientes acompanhassem o status de seus financiamentos de forma prática e intuitiva. Em 2015, com a criação de um aplicativo móvel, a empresa consolidou sua presença digital, oferecendo ainda mais conveniência e acesso à informação.
      </p>
      </motion.div>
     </div>
      </section>
    <footer className={styles.footer}>
      <div className={styles.infos}>
      <h1>Logo</h1>
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
      
       <Link 
       onClick={(ev)=>trackEvent(ev)}
       href={"https://x.com/wallifinance"}>
       <Image
        height={20}
        width={20}
        alt="twitter icon"
        src={twitterIcon}
        />
       </Link>
 
       
       
       <Link 
       onClick={(ev)=>trackEvent(ev)}
       href={"https://www.facebook.com/profile.php?id=61562086139122"}>
       <Image
           height={20}
           width={20}
           alt="facebook icon"
           src={fbIcon}
        />
       </Link>
      
        
       <Link 
       onClick={(ev)=>trackEvent(ev)}
       href={"https://contate.me/testewall"}>
          <Image
             height={20}
             width={20}
             alt="wpp icon"
             src={wppIcon}
          />
        </Link>

        
        <Link 
        onClick={(ev)=>trackEvent(ev)}
        href={"https://www.instagram.com/wallifinance/?next=%2F"}>
            <Image
                height={20}
                width={20}
                alt="instagram icon"
                src={instaIcon}
            /> 
        </Link>
       
      </div>
    </footer>

    <button className={styles.fixedButton}><Link href={'/simulacao'}>SIMULAR</Link></button>
   </main>):(
    <main className={styles.container}>
    <header className={styles.header}>
      <nav>
        <div>
        <h1>LOGO</h1>
        </div>
        <ul>
          <Link href={'/'} tabIndex={1}>Inicio</Link>
          <Link href={'#modalidades'} tabIndex={2} aria-label="Link que leva direto a section sobre modalidades de financiamento">Modalidades</Link>
          <Link href={'#sobre'} tabIndex={3} aria-label="Link que leva direto a section sobre nossa historia" >Sobre</Link>
          <Link href={'/simulacao'} tabIndex={4} aria-label="Link que leva direto para nossa pagina de simulação de financiamentos">SIMULAR</Link>
        </ul>
      </nav>
    </header>


      <section className={styles.headerPresentation}>
        <div className={styles.infos}>
        <h1>Revolucionando Seu Sonho de Casa Própria</h1>
        <h4>Benefícios Exclusivos e Facilidade Incomparável no Seu Financiamento Imobiliário</h4>
        <button aria-label="Botão que leva direto para nossa pagina de simulação de financiamentos" tabIndex={5}><Link href={'/simulacao'}>Simule Ja</Link></button>
        </div>
      </section>
    
     
      <section id="modalidades" className={styles.section}>
      <h2 tabIndex={6}>Modalidades de financiamento</h2>

      <div className={styles.containerModalities}>
        <motion.div className={styles.modality}
         initial="hide"
         whileInView="show"
         exit="hide"
         variants={introHeaderVariants}
        >
          <Image 
          width={300}
          height={300}
          alt="Imagem que representa o financiamento imobiliario"
          src={financementImage}
          />
          <div
          >
          <h3 tabIndex={7}>Financiamento imobiliario</h3>
          <p tabIndex={8}>O financiamento imobiliário é um empréstimo de longo prazo destinado à aquisição de imóveis residenciais ou comerciais. Os bancos e outras instituições financeiras fornecem o capital necessário para a compra, enquanto o comprador se compromete a pagar o valor emprestado em parcelas mensais que incluem juros e outros encargos. Esse tipo de financiamento permite que pessoas comprem imóveis mesmo sem possuir o valor total necessário. O processo geralmente envolve uma análise de crédito, avaliação do imóvel e a definição de termos como o prazo de pagamento e a taxa de juros, que podem ser fixas ou variáveis.</p>
          </div>
        </motion.div>
        <motion.div className={styles.modality2}
        initial="hide"
         whileInView="show"
         exit="hide"
        variants={introPictureVariants}
        >
         <div>
         <h3 tabIndex={9}>Crédito com garantia de imovel</h3>
         <p tabIndex={10}>O crédito com garantia de imóvel, também conhecido como home equity, é um tipo de empréstimo onde o tomador usa um imóvel quitado ou financiado como garantia para obter crédito. Esse tipo de financiamento permite acesso a valores mais altos e prazos mais longos, com taxas de juros geralmente mais baixas comparadas a outras modalidades de crédito pessoal. Os recursos obtidos podem ser utilizados para diversas finalidades, como reforma de imóveis, investimentos, educação, quitação de dívidas e outros projetos pessoais ou empresariais. Caso o tomador não consiga cumprir com as obrigações de pagamento, o imóvel pode ser tomado pela instituição financeira para quitar a dívida.</p>
         </div>
          <Image
          width={300}
          height={300}
          alt="Imagem que representa a modalidade crédito com garantia de imovel"
          src={creditImage}
          />
        </motion.div>
      </div>
      </section>

      <section className={styles.section}>
      <motion.h2
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={animateText}
      tabIndex={11}
      >Quais são os beneficios de fechar conosco?</motion.h2>
        <div className={styles.benefits}>
          <motion.div className={styles.benefitContainer}
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}
          >
          <p tabIndex={12}>1.Oferecemos algumas das menores taxas de juros do mercado, tornando seu financiamento mais acessível.</p>
          <p tabIndex={13}>2.Processo de aprovação ágil que garante que você tenha uma resposta em até 24 horas.</p>
          <p tabIndex={14}>3.Planos de pagamento personalizados para se ajustarem à sua situação financeira, com opções de prazos variando de 5 a 30 anos.</p>
          <p tabIndex={15}>4.A equipe de especialistas em financiamento daoferece consultoria gratuita para ajudar a escolher a melhor opção de financiamento.</p>
          <p tabIndex={16}>5.Um portal online fácil de usar, onde você pode acompanhar o status do seu financiamento, fazer pagamentos e gerenciar sua conta.</p>
          <p tabIndex={17}>6.Ao fazer um financiamento conosco você recebe um ano de seguro residencial gratuito.</p>
       
          </motion.div>
            <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={animatePhoto}
            >
            <Image
      width={500}
      height={600}
      src={businessMan}
      alt="Foto de homem mexendo no celular"
      />
            </motion.div>
        <motion.div className={styles.benefitContainer}
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introPictureVariants}
        >
        <p tabIndex={18}>7.Opção de amortização antecipada sem multas ou taxas adicionais.</p>
        <p tabIndex={19}>8.Descontos exclusivos e benefícios adicionais para clientes recorrentes da Wall-i.</p>
        <p tabIndex={20}>9.Um aplicativo móvel que permite que você gerencie seu financiamento de qualquer lugar, a qualquer hora.</p>
        <p tabIndex={21}>10.Descontos especiais em imóveis de construtoras parceiras da Wall-i.</p>
        <p tabIndex={22}>11.Suporte ao cliente disponível 24 horas por dia, 7 dias por semana, para responder a qualquer dúvida ou problema.</p>
        <p tabIndex={23}>12.Receba cashback em compras realizadas com parceiros da Wall-i, ajudando a reduzir ainda mais o custo do seu financiamento.</p>  
        </motion.div>
        </div>
      </section>

      <section className={styles.partners}>
          <div className={styles.partner}>
          <Link tabIndex={24}href={'/simulacao'} aria-label="Link que leva direto a pagina de simulação"> 
          <Image
           width={100}
           height={100}
           alt="Logo banco itau"
           src={itauSvg}
           />
          </Link>

          <Link tabIndex={25} href={'/simulacao'} aria-label="Link que leva direto a pagina de simulação">
          <Image
           width={100}
           height={100}
           alt="Logo banco do Bradesco"
           src={bradescoSvg}
           />
          </Link>

          <Link tabIndex={26} href={'/simulacao'} aria-label="Link que leva direto a pagina de simulação"> 
          <Image
           width={100}
           height={100}
           alt="Logo banco Santander"
           src={santanderSvg}
           />
          </Link>
          

          <Link tabIndex={27}href={'/simulacao'} aria-label="Link que leva direto a pagina de simulação">
          <Image
           width={100}
           height={100}
           alt="Logo banco Inter"
           src={interSvg}
          />
          </Link>
           
          </div>
      </section>


    <section id="sobre" className={styles.section}>
      <motion.h2
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={animateText}
      tabIndex={28}
      >Nossa História</motion.h2>

     <div className={styles.about}>
      <motion.div
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={introHeaderVariants}
      >
      <Image
      width={300}
      height={600}
      src={ownerImage}
      alt="Imagem do nosso CEO"
      />
      </motion.div>
      <div 
      >
      <motion.p
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={introHeaderVariants}
      tabIndex={29}
      >Fundada em 2010 por visionários do setor financeiro e imobiliário, a Wall-i surgiu com a missão de transformar a experiência de financiamento de imóveis. Desde o início, a empresa se destacou por sua abordagem inovadora e centrada no cliente, quebrando barreiras e simplificando processos que antes eram considerados complexos e burocráticos.
      A Wall-i começou sua jornada em um pequeno escritório na cidade de São Paulo, com uma equipe dedicada de apenas 10 pessoas. Com a visão de oferecer soluções financeiras acessíveis e transparentes, a empresa rapidamente ganhou a confiança de seus primeiros clientes, tornando-se sinônimo de segurança e eficiência no mercado imobiliário.
      Ao longo dos anos, a Wall-i investiu fortemente em tecnologia e inovação. Em 2012, lançou seu primeiro portal online, permitindo que os clientes acompanhassem o status de seus financiamentos de forma prática e intuitiva. Em 2015, com a criação de um aplicativo móvel, a empresa consolidou sua presença digital, oferecendo ainda mais conveniência e acesso à informação.
      </motion.p>
      </div>
     </div>
      </section>
    <div className={styles.footerContainer}>
    <footer className={styles.footer}>
      <div className={styles.infos}>
      <h1>Logo</h1>
        <div className={styles.info}>
        <Image
        src={emailIcon}
        width={16}
        height={16}
        alt="Icone de email"
     
        />
        <p
        tabIndex={30}
        >kaiques.goncalves@gmail.com</p>
       
        </div>

        <div className={styles.info}>
        <Image
        src={phoneIcon}
        width={16}
        height={16}
        alt="Icone de telefone"
        />
        <p
        tabIndex={31}
        >(11) 95045-3953</p>
       
        </div>

        <div className={styles.info}>
        <Image
        src={scheduleIcon}
        width={16}
        height={16}
        alt="Icone de agenda"
        />
        <p
        tabIndex={32}
        >Segunda a Sexta 8:00 as 17:00 <br />Sábado 8:00 as 12:00</p>   
        </div>
      </div>

      <div className={styles.icons}>
       <Link 
       target="_blank"
       onClick={(ev)=>trackEvent(ev)}
       href={"https://x.com/wallifinance"}
       aria-label="Leva direto ao nosso twitter"
       tabIndex={33}
       >
        <Image
        height={52}
        width={52}
        alt="Logo do Twitter"
        src={twitterIcon}
        />
       </Link>
     

 
    <Link 
    onClick={(ev)=>trackEvent(ev)}
    target="_blank"
    aria-label="Leva direto ao nosso facebook"
    href={"https://www.facebook.com/profile.php?id=61562086139122"}
    tabIndex={34}
    >
        <Image
           height={52}
           width={52}
           alt="Logo do facebook"
           src={fbIcon}
        />
       </Link>
  
      
        
        
      <Link 
      onClick={(ev)=>trackEvent(ev)}
      target="_blank"
      aria-label="Leva direto ao nosso whatsapp"
      href={'https://contate.me/testewall'}
      tabIndex={35}
      >
        <Image
           height={52}
           width={52}
           alt="Logo do whatsapp"
           src={wppIcon}
        />
      </Link>

      
      <Link 
      onClick={(ev)=>trackEvent(ev)}
      target="_blank"
      aria-label="Leva direto ao nosso instagram"
      href={"https://www.instagram.com/wallifinance/?next=%2F"}
      tabIndex={36}
      >
        <Image
           height={52}
           width={52}
           alt="Logo do instagram"
           src={instaIcon}
        /> 
      </Link>
      </div>
    </footer>

    </div>
    
    <button className={styles.fixedButton}><Link href={'/simulacao'}>SIMULAR</Link></button>
   </main>
  )}
    
  </>

)
}
