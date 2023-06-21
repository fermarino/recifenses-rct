import React from 'react'
import Image from 'next/image'
import AboutShop from '../../../public/pana.svg'
import styles from './page.module.css'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
    <div className={styles.item}>
      <h1 className={styles.title}>Bem-vindo, <span className={styles.recSpan}>Recifense!</span></h1>
      <p className={styles.description}>Somos uma plataforma de e-commerce exclusiva para pequenos empreendedores de Pernambuco. Nosso objetivo é ajudar esses empreendedores a expandirem seus negócios, conectando-os com clientes locais e impulsionando suas vendas de maneira simples e eficiente.</p>

      <p className={styles.description}>Acreditamos no poder dos negócios locais e no impacto positivo que eles têm em nossa comunidade. Sabemos que pequenos empreendedores têm produtos únicos e de alta qualidade para oferecer, mas muitas vezes enfrentam desafios ao tentar competir com grandes varejistas online. É por isso que criamos o Recifenses.
      </p>
    </div>
    <div className={styles.itemImg}>
      <Image src={AboutShop} alt='Ilustração de um homem segurando um carrinho de compras em frente a uma tela de computador' className={styles.img}/>
    </div>
  </div>
  )
}

export default About