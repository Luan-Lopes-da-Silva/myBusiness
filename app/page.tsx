'use client'
import styles from "./page.module.scss";
import Link from "next/link";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import Image from "next/image";
import "./carousel.css"

export default function Home() {
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
    <section>
      <h1>Modalidades</h1>
    </section>
    <section>
      <p>Teste</p>
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


    <section id="contato">
      <h1>Aba de contato</h1>
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

    <section id="sobre">
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
    <footer id="#contato">
      <h1>Logo</h1>
    </footer>
   </main>
  )
}
