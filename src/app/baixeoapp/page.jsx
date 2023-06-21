import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import QrCode from '../../../public/qrcode.svg';
import AppStore from '../../../public/appstore.svg';
import PlayStore from '../../../public/playstore.svg';
import Phone from '../../../public/app.svg';
import Link from 'next/link';

const DownloadNow = () => {
  return (
    <div className={styles.downloadContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Baixe agora o nosso aplicativo!</h1>
        <p className={styles.description}>Baixe agora o Recifenses e se conecte.</p>
        <Image src={QrCode} alt='Imagem de um celular com a tela inicial do App Recifenses: Uma tela azul com a Logo Recifenses e a mensagem de "Bem Vindo" em cima do botão de Login' className={styles.img}/>

        <div className={styles.downloadBtns}>
          <Link href='#' className={styles.btnDownload}>
            <Image src={AppStore} alt="Logo da App Store"/>
            App Store
          </Link>
          <Link href="#" className={styles.btnDownload}>
            <Image src={PlayStore} alt='Logo da PlayStore'/>
            Play Store
          </Link>
        </div>

      </div>
      <div className={styles.itemImg}>
        <Image src={Phone} alt='Imagem de um celular com a tela inicial do App Recifenses: Uma tela azul com a Logo Recifenses e a mensagem de "Bem Vindo" em cima do botão de Login' className={styles.img}/>
      </div>
    </div>
  )
}

export default DownloadNow
