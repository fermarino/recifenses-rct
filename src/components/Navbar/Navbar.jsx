import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Logo from '@/components/Logo/Logo'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Sobre',
    url: '/sobre'
  },
  {
    id: 3,
    title: 'Contato',
    url: '/contato'
  },
  {
    id: 4,
    title: 'Baixe o App',
    url: '/baixeoapp'
  },
]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="" alt="">
      <Logo/>
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar;