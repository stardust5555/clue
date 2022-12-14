import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {

  let router = useRouter();


  const inputStartSquare = useRef(null);
  const inputEndSquare = useRef(null);

  function handleClick(){

    if(inputStartSquare.current.value.toLowerCase()==="h6" && inputEndSquare.current.value.toLowerCase()==="g8" //"a3" && inputEndSquare.current.value.toLowerCase()==="b1"
    ){
      router.push("/biology")
    }else{
      alert("Wrong answer - try again")
    }
    console.log(inputStartSquare.current.value)
    console.log(inputEndSquare.current.value)
  }




  return (
    <div className={styles.container}>
      <Head>
        <title>3</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Clue 3: Chess</h1>
        <br></br>

        <Image
          src="/chess.png"
          alt="Chess Game"
          width="300"
          height="300"
        />

        <p className={styles.description}> Please enter the winning move for mate in one...
        <br></br>
        e.g. C3 to D6
        </p>


      {/* <label for="startSquare">Starting Position:</label> */}
      <input
        ref={inputStartSquare}
        type="text"
        id="startSquare"
        name="startSquare"
      />

<p>to</p>
      {/* <label for="endSquare">Ending Position:</label> */}
      <input
        ref={inputEndSquare}
        type="text"
        id="endSquare"
        name="endSquare"
      />
<br></br>
<br></br>
      <button onClick={handleClick}>Submit Answer</button>
      </main>
    </div>
  )
}
