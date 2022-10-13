import styles from '../styles/Home.module.css'
import Head from 'next/head'

import Image from "next/image"

export default function NextClue(){
    return(
        
        <div className={styles.container}>
          <Head>
            <title>6</title>
          </Head>
            <h1>You got it right!</h1>
            <p>Using the wordle solution and the map below, find your next clue!</p>
            <Image
            src="/bookcase.png"
            alt="bookcase"
            width="800"
            height="500"
            />
        </div>
    )
}