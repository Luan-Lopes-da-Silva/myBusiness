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
import partnerImage from '@/public/partner.svg'
import businessMan from '@/public/nathan-costa-T8Q8znYdbDw-unsplash.jpg'
import { Variants,motion } from "framer-motion";
import useWindowSize from '@/app/utils/useWindowSize'
import Hotjar from '@hotjar/browser';

const siteId = 5052095;
const hotjarVersion = 6;

Hotjar.init(siteId,hotjarVersion)
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

  const animatePartner: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:.1
      }
    }
  }

  
  const animatePartner2: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:.2
      }
    }
  }

  
  const animatePartner3: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:.3
      }
    }
  }

  
  const animatePartner4: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:.4
      }
    }
  }

  
  const animatePartner5: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:.5
      }
    }
  }

  
  const animatePartner6: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:.6
      }
    }
  }

  
  const animatePartner7: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:.7
      }
    }
  }

  
  const animatePartner8: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:.8
      }
    }
  }

  const animatePartner9: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:.9
      }
    }
  }

  const animatePartner10: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1
      }
    }
  }

  const animatePartner11: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1.1
      }
    }
  }


  const animatePartner12: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1.2
      }
    }
  }

  const animatePartner13: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1.3
      }
    }
  }

  const animatePartner14: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1.4
      }
    }
  }

  const animatePartner15: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1.5
      }
    }
  }

  const animatePartner16: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1.6
      }
    }
  }

  const animatePartner17: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1.7
      }
    }
  }

  const animatePartner18: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1.8
      }
    }
  }

  const animatePartner19: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1.9
      }
    }
  }

  const animatePartner20: Variants = {
    hide:{
      opacity:0,
      y:50,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:2
      }
    }
  }


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
          <motion.div>
          <h3>Financiamento imobiliario</h3>
          <p>O financiamento imobiliário é um empréstimo de longo prazo destinado à aquisição de imóveis residenciais ou comerciais. Os bancos e outras instituições financeiras fornecem o capital necessário para a compra, enquanto o comprador se compromete a pagar o valor emprestado em parcelas mensais que incluem juros e outros encargos. Esse tipo de financiamento permite que pessoas comprem imóveis mesmo sem possuir o valor total necessário. O processo geralmente envolve uma análise de crédito, avaliação do imóvel e a definição de termos como o prazo de pagamento e a taxa de juros, que podem ser fixas ou variáveis.</p>
          </motion.div>
        </div>
        <motion.div className={styles.modality2}
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
        </motion.div>
      </div>
      </section>

      <section className={styles.section}>
      <motion.h2
      >Quais são os beneficios de fechar conosco?</motion.h2>
        <div className={styles.benefits}>
          <motion.div className={styles.benefitContainer}
          >
          <p>1.Taxas de Juros Competitivas:oferece algumas das menores taxas de juros do mercado, tornando seu financiamento mais acessível.</p>
          <p>2.Aprovação Rápida: Processo de aprovação ágil que garante que você tenha uma resposta em até 24 horas.</p>
          <p>3.Flexibilidade de Pagamento: Planos de pagamento personalizados para se ajustarem à sua situação financeira, com opções de prazos variando de 5 a 30 anos.</p>
          <p>4.Consultoria Personalizada: A equipe de especialistas em financiamento daoferece consultoria gratuita para ajudar a escolher a melhor opção de financiamento.</p>
          <p>5.Portal Online Intuitivo: Um portal online fácil de usar, onde você pode acompanhar o status do seu financiamento, fazer pagamentos e gerenciar sua conta.</p>
          <p>6.Seguro Residencial Gratuito: Ao fazer um financiamento conosco você recebe um ano de seguro residencial gratuito.</p>
       
          </motion.div>
            <motion.div
            >
            <Image
      width={500}
      height={600}
      src={businessMan}
      alt="Business man"
      />
            </motion.div>
        <motion.div className={styles.benefitContainer}
        >
        <p>7.Amortização Antecipada: Opção de amortização antecipada sem multas ou taxas adicionais.</p>
        <p>8.Programa de Fidelidade: Descontos exclusivos e benefícios adicionais para clientes recorrentes da Wall-i.</p>
        <p>9.Aplicativo Móvel: Um aplicativo móvel que permite que você gerencie seu financiamento de qualquer lugar, a qualquer hora.</p>
        <p>10.Parcerias com Construtoras: Descontos especiais em imóveis de construtoras parceiras da Wall-i.</p>
        <p>11.Suporte 24/7: Suporte ao cliente disponível 24 horas por dia, 7 dias por semana, para responder a qualquer dúvida ou problema.</p>
        <p>12.Cashback: Receba cashback em compras realizadas com parceiros da Wall-i, ajudando a reduzir ainda mais o custo do seu financiamento.</p>  
        </motion.div>
        </div>
      </section>

      <section className={styles.partners}>
        <h2>Nossos parceiros</h2>
          <div className={styles.partner}>
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>

            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>

            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div>
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
           
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
       <Link href={"https://x.com/wallifinance"}>
       <Image
        height={36}
        width={36}
        alt="twitter icon"
        src={twitterIcon}
        />
       </Link>
       
       <Link href={"https://www.facebook.com/profile.php?id=61562086139122"}>
       <Image
           height={36}
           width={36}
           alt="facebook icon"
           src={fbIcon}
        />
       </Link>
        
        <Link href={"https://contate.me/testewall"}>
          <Image
             height={36}
             width={36}
             alt="wpp icon"
             src={wppIcon}
          />
        </Link>
        
        <Link href={"https://www.instagram.com/wallifinance/?next=%2F"}>
            <Image
                height={36}
                width={36}
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
        <motion.div className={styles.modality}
         initial="hide"
         whileInView="show"
         exit="hide"
         variants={introHeaderVariants}
        >
          <Image 
          width={300}
          height={300}
          alt="financement image"
          src={financementImage}
          />
          <div
          >
          <h3>Financiamento imobiliario</h3>
          <p>O financiamento imobiliário é um empréstimo de longo prazo destinado à aquisição de imóveis residenciais ou comerciais. Os bancos e outras instituições financeiras fornecem o capital necessário para a compra, enquanto o comprador se compromete a pagar o valor emprestado em parcelas mensais que incluem juros e outros encargos. Esse tipo de financiamento permite que pessoas comprem imóveis mesmo sem possuir o valor total necessário. O processo geralmente envolve uma análise de crédito, avaliação do imóvel e a definição de termos como o prazo de pagamento e a taxa de juros, que podem ser fixas ou variáveis.</p>
          </div>
        </motion.div>
        <motion.div className={styles.modality2}
        initial="hide"
         whileInView="show"
         exit="hide"
        variants={introPictureVariants}
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
        </motion.div>
      </div>
      </section>

      <section className={styles.section}>
      <motion.h2
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={animateText}
      >Quais são os beneficios de fechar conosco?</motion.h2>
        <div className={styles.benefits}>
          <motion.div className={styles.benefitContainer}
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}
          >
          <p>1.Taxas de Juros Competitivas:oferece algumas das menores taxas de juros do mercado, tornando seu financiamento mais acessível.</p>
          <p>2.Aprovação Rápida: Processo de aprovação ágil que garante que você tenha uma resposta em até 24 horas.</p>
          <p>3.Flexibilidade de Pagamento: Planos de pagamento personalizados para se ajustarem à sua situação financeira, com opções de prazos variando de 5 a 30 anos.</p>
          <p>4.Consultoria Personalizada: A equipe de especialistas em financiamento daoferece consultoria gratuita para ajudar a escolher a melhor opção de financiamento.</p>
          <p>5.Portal Online Intuitivo: Um portal online fácil de usar, onde você pode acompanhar o status do seu financiamento, fazer pagamentos e gerenciar sua conta.</p>
          <p>6.Seguro Residencial Gratuito: Ao fazer um financiamento conosco você recebe um ano de seguro residencial gratuito.</p>
       
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
      alt="Business man"
      />
            </motion.div>
        <motion.div className={styles.benefitContainer}
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introPictureVariants}
        >
        <p>7.Amortização Antecipada: Opção de amortização antecipada sem multas ou taxas adicionais.</p>
        <p>8.Programa de Fidelidade: Descontos exclusivos e benefícios adicionais para clientes recorrentes da Wall-i.</p>
        <p>9.Aplicativo Móvel: Um aplicativo móvel que permite que você gerencie seu financiamento de qualquer lugar, a qualquer hora.</p>
        <p>10.Parcerias com Construtoras: Descontos especiais em imóveis de construtoras parceiras da Wall-i.</p>
        <p>11.Suporte 24/7: Suporte ao cliente disponível 24 horas por dia, 7 dias por semana, para responder a qualquer dúvida ou problema.</p>
        <p>12.Cashback: Receba cashback em compras realizadas com parceiros da Wall-i, ajudando a reduzir ainda mais o custo do seu financiamento.</p>  
        </motion.div>
        </div>
      </section>

      <section className={styles.partners}>
        <h2>Nossos parceiros</h2>
          <div className={styles.partner}>
            <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={animatePartner}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner2}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner3}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner4}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner5}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner6}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner7}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner8}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner9}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner10}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>

            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner11}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>

            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner12}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div>
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner13}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner14}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner15}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner16}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner17}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner18}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner19}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
            <motion.div
             initial="hide"
             whileInView="show"
             exit="hide"
             variants={animatePartner20}
            >
              <Image
              width={50}
              height={50}
              src={partnerImage}
              alt="TT icon"
              />
            </motion.div> 
           
          </div>
      </section>


    <section id="sobre" className={styles.section}>
      <motion.h2
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={animateText}
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
      alt="owner image"
      />
      </motion.div>
      <motion.div 
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={introPictureVariants}>
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
       <Link href={"https://x.com/wallifinance"}>
        <Image
        height={52}
        width={52}
        alt="twitter icon"
        src={twitterIcon}
        />
       </Link>

       <Link href={"https://www.facebook.com/profile.php?id=61562086139122"}>
        <Image
           height={52}
           width={52}
           alt="facebook icon"
           src={fbIcon}
        />
       </Link>
        
        
      <Link href={'https://contate.me/testewall'}>
        <Image
           height={52}
           width={52}
           alt="wpp icon"
           src={wppIcon}
        />
      </Link>
      
      <Link href={"https://www.instagram.com/wallifinance/?next=%2F"}>
        <Image
           height={52}
           width={52}
           alt="instagram icon"
           src={instaIcon}
        /> 
      </Link>
      </div>
    </footer>

    <button className={styles.fixedButton}><Link href={'/simulacao'}>SIMULAR</Link></button>
   </main>
  )}
    
  </>

)
}
