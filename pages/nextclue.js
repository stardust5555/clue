import styles from '../styles/Home.module.css'
import Head from 'next/head'

import Image from "next/image"

export default function NextClue(){
    return(
        
        <div className={styles.container}>
          <Head>
            <title>7</title>
          </Head>
            <Image
            src="/bookcase.png"
            alt="bookcase"
            width="800"
            height="500"
            />
        </div>
    )
}