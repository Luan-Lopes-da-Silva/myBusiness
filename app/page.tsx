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

export default function Home() {
  const firstImage= 'https://i.ibb.co/JyppHsp/scott-graham-OQMZw-Nd3-Th-U-unsplash.jpg'
  const secondImage = 'https://i.ibb.co/KzWzbvw/tierra-mallorca-rg-J1-J8-SDEAY-unsplash.jpg'
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

    <section className={styles.carouselContainer}>
    <Splide className={styles.slideContainer}>
      <SplideSlide>
      <div className={styles.imgContainer}>
      <Image
      width={100}
      height={400}
      src={firstImage}
      alt="test"
      />
      </div>

      <div className={styles.textContainer}>
        <h1>Financiamento imobiliário</h1>
      </div>
      </SplideSlide>
      <SplideSlide>
      <div className={styles.imgContainer}>
      <Image
      width={100}
      height={100}
      src={secondImage}
      alt="test"
      />
      </div>

      <div className={styles.textContainer}>
        <h1>Crédito com garantia de imóvel</h1>
      </div>

      </SplideSlide>
    </Splide>
    </section>
    
   
      <section id="modalidades" className={styles.modalidades}>
      <h2>Modalidades</h2>

      <div className={styles.cardsContainer}>
     
          <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
          <div className={styles.front}>
          <h4>Financiamento Imobiliario</h4>
          <Image
          width={300}
          height={300}
          alt="Financiamento Imobiliario."
          src={firstImage}
          />
        </div>
        <div className={styles.back}>
          <p>Financiamento imobiliário é a compra de um imóvel com o pagamento parcelado, geralmente a longo prazo, com o imóvel adquirido como garantia.</p>
        </div>
     
          </div>
          </div>
      
        
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
        <div className={styles.front}>
          <h4>Crédito com garantia de imovel</h4>
          <Image
           width={300}
           height={300}
          alt="Crédito com garantia de imovel."
          src={secondImage}
          />
        </div>
        <div className={styles.back}>
          <p>Crédito com garantia de imóvel é um empréstimo em que o imóvel do mutuário é usado como garantia, oferecendo taxas de juros mais baixas.</p>
        </div>
        </div>
      </div>
      
      </div>
      </section>


    <section id="sobre" className={styles.section}>
      <h1>Aba sobre</h1>

      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint cupiditate quia nam porro laudantium iure repellat ipsum maiores, ex molestiae fuga expedita doloribus placeat 
      reprehenderit facilis. Voluptatibus id recusandae distinctio!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, minus atque. Dolor cumque vel asperiores hic eum quod voluptas voluptates fugiat, reiciendis excepturi neque eveniet ipsa accusamus sapiente officia eligendi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam exercitationem facere assumenda. Blanditiis recusandae nostrum consequuntur fugit aspernatur praesentium nobis dicta deserunt! Enim, tempore perspiciatis quis ipsum error deleniti.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque corporis ratione, cum nobis odit ipsam non velit ullam alias deserunt voluptas blanditiis dignissimos, culpa molestiae vel quibusdam. Ea, eius.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores odit omnis fugiat inventore, qui dicta voluptatum, culpa quis placeat totam, quae voluptates ipsum aliquam ducimus sint. Ipsa incidunt dolorem facilis!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum doloremque dolores accusantium quas natus pariatur? Possimus est beatae mollitia inventore, maiores id expedita, nobis et repudiandae, voluptates sit aperiam.
      </p>

      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint cupiditate quia nam porro laudantium iure repellat ipsum maiores, ex molestiae fuga expedita doloribus placeat 
      reprehenderit facilis. Voluptatibus id recusandae distinctio!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, minus atque. Dolor cumque vel asperiores hic eum quod voluptas voluptates fugiat, reiciendis excepturi neque eveniet ipsa accusamus sapiente officia eligendi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam exercitationem facere assumenda. Blanditiis recusandae nostrum consequuntur fugit aspernatur praesentium nobis dicta deserunt! Enim, tempore perspiciatis quis ipsum error deleniti.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque corporis ratione, cum nobis odit ipsam non velit ullam alias deserunt voluptas blanditiis dignissimos, culpa molestiae vel quibusdam. Ea, eius.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores odit omnis fugiat inventore, qui dicta voluptatum, culpa quis placeat totam, quae voluptates ipsum aliquam ducimus sint. Ipsa incidunt dolorem facilis!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum doloremque dolores accusantium quas natus pariatur? Possimus est beatae mollitia inventore, maiores id expedita, nobis et repudiandae, voluptates sit aperiam.
      </p>

      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint cupiditate quia nam porro laudantium iure repellat ipsum maiores, ex molestiae fuga expedita doloribus placeat 
      reprehenderit facilis. Voluptatibus id recusandae distinctio!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, minus atque. Dolor cumque vel asperiores hic eum quod voluptas voluptates fugiat, reiciendis excepturi neque eveniet ipsa accusamus sapiente officia eligendi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam exercitationem facere assumenda. Blanditiis recusandae nostrum consequuntur fugit aspernatur praesentium nobis dicta deserunt! Enim, tempore perspiciatis quis ipsum error deleniti.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque corporis ratione, cum nobis odit ipsam non velit ullam alias deserunt voluptas blanditiis dignissimos, culpa molestiae vel quibusdam. Ea, eius.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores odit omnis fugiat inventore, qui dicta voluptatum, culpa quis placeat totam, quae voluptates ipsum aliquam ducimus sint. Ipsa incidunt dolorem facilis!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum doloremque dolores accusantium quas natus pariatur? Possimus est beatae mollitia inventore, maiores id expedita, nobis et repudiandae, voluptates sit aperiam.
      </p>

      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint cupiditate quia nam porro laudantium iure repellat ipsum maiores, ex molestiae fuga expedita doloribus placeat 
      reprehenderit facilis. Voluptatibus id recusandae distinctio!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, minus atque. Dolor cumque vel asperiores hic eum quod voluptas voluptates fugiat, reiciendis excepturi neque eveniet ipsa accusamus sapiente officia eligendi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam exercitationem facere assumenda. Blanditiis recusandae nostrum consequuntur fugit aspernatur praesentium nobis dicta deserunt! Enim, tempore perspiciatis quis ipsum error deleniti.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque corporis ratione, cum nobis odit ipsam non velit ullam alias deserunt voluptas blanditiis dignissimos, culpa molestiae vel quibusdam. Ea, eius.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores odit omnis fugiat inventore, qui dicta voluptatum, culpa quis placeat totam, quae voluptates ipsum aliquam ducimus sint. Ipsa incidunt dolorem facilis!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum doloremque dolores accusantium quas natus pariatur? Possimus est beatae mollitia inventore, maiores id expedita, nobis et repudiandae, voluptates sit aperiam.
      </p>
      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint cupiditate quia nam porro laudantium iure repellat ipsum maiores, ex molestiae fuga expedita doloribus placeat 
      reprehenderit facilis. Voluptatibus id recusandae distinctio!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, minus atque. Dolor cumque vel asperiores hic eum quod voluptas voluptates fugiat, reiciendis excepturi neque eveniet ipsa accusamus sapiente officia eligendi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam exercitationem facere assumenda. Blanditiis recusandae nostrum consequuntur fugit aspernatur praesentium nobis dicta deserunt! Enim, tempore perspiciatis quis ipsum error deleniti.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque corporis ratione, cum nobis odit ipsam non velit ullam alias deserunt voluptas blanditiis dignissimos, culpa molestiae vel quibusdam. Ea, eius.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores odit omnis fugiat inventore, qui dicta voluptatum, culpa quis placeat totam, quae voluptates ipsum aliquam ducimus sint. Ipsa incidunt dolorem facilis!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum doloremque dolores accusantium quas natus pariatur? Possimus est beatae mollitia inventore, maiores id expedita, nobis et repudiandae, voluptates sit aperiam.
      </p>
      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint cupiditate quia nam porro laudantium iure repellat ipsum maiores, ex molestiae fuga expedita doloribus placeat 
      reprehenderit facilis. Voluptatibus id recusandae distinctio!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, minus atque. Dolor cumque vel asperiores hic eum quod voluptas voluptates fugiat, reiciendis excepturi neque eveniet ipsa accusamus sapiente officia eligendi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam exercitationem facere assumenda. Blanditiis recusandae nostrum consequuntur fugit aspernatur praesentium nobis dicta deserunt! Enim, tempore perspiciatis quis ipsum error deleniti.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque corporis ratione, cum nobis odit ipsam non velit ullam alias deserunt voluptas blanditiis dignissimos, culpa molestiae vel quibusdam. Ea, eius.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores odit omnis fugiat inventore, qui dicta voluptatum, culpa quis placeat totam, quae voluptates ipsum aliquam ducimus sint. Ipsa incidunt dolorem facilis!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum doloremque dolores accusantium quas natus pariatur? Possimus est beatae mollitia inventore, maiores id expedita, nobis et repudiandae, voluptates sit aperiam.
      </p>
      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint cupiditate quia nam porro laudantium iure repellat ipsum maiores, ex molestiae fuga expedita doloribus placeat 
      reprehenderit facilis. Voluptatibus id recusandae distinctio!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, minus atque. Dolor cumque vel asperiores hic eum quod voluptas voluptates fugiat, reiciendis excepturi neque eveniet ipsa accusamus sapiente officia eligendi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam exercitationem facere assumenda. Blanditiis recusandae nostrum consequuntur fugit aspernatur praesentium nobis dicta deserunt! Enim, tempore perspiciatis quis ipsum error deleniti.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque corporis ratione, cum nobis odit ipsam non velit ullam alias deserunt voluptas blanditiis dignissimos, culpa molestiae vel quibusdam. Ea, eius.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores odit omnis fugiat inventore, qui dicta voluptatum, culpa quis placeat totam, quae voluptates ipsum aliquam ducimus sint. Ipsa incidunt dolorem facilis!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum doloremque dolores accusantium quas natus pariatur? Possimus est beatae mollitia inventore, maiores id expedita, nobis et repudiandae, voluptates sit aperiam.
      </p>
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
