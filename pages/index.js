import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {

  let router = useRouter();

  const inputPiece = useRef(null);
  const inputStartSquare = useRef(null);
  const inputEndSquare = useRef(null);

  function handleClick(){

    if(inputPiece.current.value.toLowerCase()==="queen" && inputStartSquare.current.value.toLowerCase()==="c3" && inputEndSquare.current.value.toLowerCase()==="d6"){
      alert("Correct!")
      router.push("/biology")
    }else{
      alert("Wrong answer - try again")
    }
    console.log(inputPiece.current.value)
    console.log(inputStartSquare.current.value)
    console.log(inputEndSquare.current.value)
  }




  return (
    <div className={styles.container}>
      <Head>
        <title>Clue 19</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Clue 9</h1>

        <p className={styles.description}> Please enter the winning move...
        <br></br>
        e.g. queen, C3, D6
        </p>

      
        <label for="piece">Piece:</label>
        <input
        ref={inputPiece}
        type="text"
        id="piece"
        name="piece"
      />
<br></br>
<br></br>
      <label for="startSquare">Starting Position:</label>
      <input
        ref={inputStartSquare}
        type="text"
        id="startSquare"
        name="startSquare"
      />
<br></br>
<br></br>
      <label for="endSquare">Ending Position:</label>
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
