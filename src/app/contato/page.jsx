import React from 'react'
import Image from 'next/image'
import ContactImg from '../../../public/contact.svg'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.content}>
        <form className={styles.form}>
        <h1 className={styles.title}>Entre em contato</h1>
          <label className={styles.label} htmlFor="name">Nome:</label>
          <input type='text' placeholder='Marcos Guanabara' name='txtname' id='name' className={styles.input}/>
          
          <label className={styles.label} htmlFor="email">Email:</label>
          <input type='text' placeholder='marcosguanabara@email.com' name='txtemail' id='email' className={styles.input}/>

          <label className={styles.label} htmlFor="name">Mensagem:</label>
          <textarea placeholder='Digite a sua mensagem:' className={styles.textArea}></textarea>
          <Button url="#" text="Enviar"/>
        </form>
        <div className={styles.imgContainer}>
          <Image src={ContactImg} alt='Ilustração de uma mulher com fone de ouvido e microfone atendendo uma ligação.' />
        </div>
      </div>
    </div>
  )
}

export default Contact