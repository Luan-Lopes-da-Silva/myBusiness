'use client'
import styles from "./page.module.scss";
import Link from "next/link";
import {items} from '@/public/items.json'
import Carousel from "react-elastic-carousel"
import './carousel.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];


export default function Home() {
  
  const {elastic} = items
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

    <section className="carouselContainer">
      <Carousel itemsToShow={1}  showArrows={false}>
      {elastic.map((item)=>(
        <div 
        key={item.id}
        className= "carouselWrapper"
        style={{backgroundImage:`url(${item.imgUrl})`}}
        >  
        <div className= "carouselText">
          <h3>{item.title}</h3>
        </div> 
        </div>
      ))}
      </Carousel>
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
