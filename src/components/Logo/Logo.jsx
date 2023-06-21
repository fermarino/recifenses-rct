import Image from 'next/image'
import Logotipo from '../../../public/Logo.svg'
import Link from 'next/link'

export default function Logo () {
  return (
    <Link href='/'><Image src={Logotipo} alt='Logo da marca Recifenses'/></Link>
  )
}