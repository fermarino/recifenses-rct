import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
 })

export const metadata = {
  title: 'Recifenses',
  description: 'Comércio online simples e rápido para toda a região.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <div className='container'>
          <Navbar/>
          {children}
          <Footer/>
        </div>
        </body>
    </html>
  )
}
