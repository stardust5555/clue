import styles from '../styles/Home.module.css'
import Head from 'next/head'

import ReactAudioPlayer from 'react-audio-player';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Link from 'next/link';

export default function Solved(){

    let router = useRouter();

    const inputPassword = useRef(null);
  
    function handleClick(){
  
      if(inputPassword.current.value.toLowerCase()==="study"){
        alert("Correct!")
        router.push("/nextclue")
      }else{
        alert("Wrong answer - try again")
      }
      console.log(inputPassword.current.value)
    }
    return(
        <div className={styles.container}>
          <Head>
            <title>5</title>
          </Head>

          <h1 className={styles.title}>Clue 6</h1>

          <p className={styles.description}> Congratulations! Here's the next clue. You can solve the clue using either option 1 or option 2 - your choice!</p>

        <h4>Option 1</h4>
        <p>તે સફરજનના બાઉલમાં છે</p>

        <h4>Option 2</h4>
        {/* <p>Clip 1</p>
            <ReactAudioPlayer
                src="/spanish.mp3"
                controls    
            /> */}
        <p>Clip 1</p>
        <ReactAudioPlayer
            src="/guju2.mp3"
            controls    
        />
        <p>Clip 2</p>
        <ReactAudioPlayer
            src="/french2.mp3"
            controls    
        />

        
        {/* <p>OMIT THIS: Here's the link they find in the fruit bowl:  </p>
        <Link href="https://mywordle.strivemath.com/?word=ohlgj"><a>https://mywordle.strivemath.com/?word=ohlgj</a></Link> */}


<br></br>
<br></br>
<div className={styles.description}></div>
        <h3>Once you've found the next clue, enter the password...</h3>
        <label for="password">Password:</label>
        <input
        ref={inputPassword}
        type="text"
        id="password"
        name="password"
      />

<button className={styles.description} onClick={handleClick}>Submit Password</button>
        </div>
    )

}