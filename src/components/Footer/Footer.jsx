import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>&copy; Todos os direitos reservados - Recifenses - 2023</p>
    </div>
  )
}

export default Footer