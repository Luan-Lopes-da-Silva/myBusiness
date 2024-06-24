'use client'
import styles from "./page.module.scss";
import Link from "next/link";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import Image from "next/image";
import { useState } from "react";
import twitterIcon from '@/public/icons8-twitter.svg'
import instaIcon from '@/public/icons8-instagram.svg'
import linkedinIcon from '@/public/icons8-linkedin.svg'
import wppIcon from '@/public/icons8-whatsapp.svg'


export default function Home() {

  const [isFlipped, setFlipped] = useState(false)
  const [isFlipped2, setFlipped2] = useState(false)


  function handleFlip(e:any){
  setFlipped(!isFlipped)
  }

  function handleFlip2(e:any){
    setFlipped2(!isFlipped2)
    }
  


  const firstImage= 'https://i.ibb.co/JyppHsp/scott-graham-OQMZw-Nd3-Th-U-unsplash.jpg'
  const secondImage = 'https://i.ibb.co/KzWzbvw/tierra-mallorca-rg-J1-J8-SDEAY-unsplash.jpg'
  return (
   <main>
    <header className={styles.header}>
      <nav>
        <div>
          <h1>Logo</h1>
        </div>
        <ul>
          <Link href={''}>Inicio</Link>
          <Link href={'#sobre'}>Sobre</Link>
          <Link href={'#contato'}>Contato</Link>
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
    
    <section className={styles.section}>
      <h2>Teste</h2>
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


    <section id="contato" className={styles.section}>
      <h2>Aba de contato</h2>
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
    <footer id="#contato" className={styles.footer}>
      <h1>Logo</h1>

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
        <Image
           height={36}
           width={36}
           alt="wpp icon"
           src={wppIcon}
        />
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
