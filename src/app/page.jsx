import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.svg'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}><span className={styles.recSpan}>Rec</span>ifenses</h1>
        <p className={styles.description}>Comércio online simples e rápido para todas as regiões pernambucanas.</p>
        <Button url="/sobre"text="Saiba mais"/>
      </div>
      <div className={styles.itemImg}>
        <Image src={Hero} alt='Ilustração de um homem segurando um carrinho de compras em frente a uma tela de computador' className={styles.img}/>
      </div>
    </div>
  )
}
