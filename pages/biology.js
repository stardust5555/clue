import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ReactAudioPlayer from 'react-audio-player';

export default function Biology() {

  let router = useRouter();

  //BIOLOGY
  const inputAnswer1 = useRef(null);
  const inputAnswer2 = useRef(null);
  const inputAnswer3 = useRef(null);

  //PHYSICS
  const inputCircuit1 = useRef(null);
  //const inputCircuit2 = useRef(null);

  //MUSIC
  const inputMusic1 = useRef(null);
  const inputMusic2 = useRef(null);
  const inputMusic3 = useRef(null);
  const inputMusic4 = useRef(null);
  const inputMusic5 = useRef(null);

  function handleClick(){

    if(
      //BIOLOGY
        inputAnswer1.current.value==="Red Blood Cells" 
        && inputAnswer2.current.value==="Bone Marrow"
        && inputAnswer3.current.value==="Nucleus"
      
        //PHYSICS
        && inputCircuit1.current.value==="B"

        //MUSIC
        && inputMusic1.current.value==="Thunder Road"
        && inputMusic2.current.value==="Alicia Keys"
        && inputMusic3.current.value==="U2"
        && inputMusic4.current.value==="Kabhi Khushi Kabie Gham"
        && inputMusic5.current.value==="Mohabbatein"
        ){
      alert("Correct!")
      router.push("/solved")
    }else{
      alert("Wrong answer - try again")
    }
  }




  return (
    <div className={styles.container}>
      <Head>
        <title>10</title>
      </Head>

      <main>
        <h1 className={styles.title}>Clue 10</h1>

        <p className={styles.description}> Well done! Fill in the missing fields to progress to the next clue!</p>

        <h2>Biology</h2>

      <p>Certain types of cells carry haemoglobin. This cells are called
        <span>        
            <select name="answer1" id="answer1" ref={inputAnswer1}>
                <option value="Red Blood Cells">red blood cells</option>
                <option value="White Blood Cells">white blood cells</option>
            </select>
        </span>

        . These cells are created in the 
        <span>        
            <select name="answer2" id="answer2" ref={inputAnswer2}>
                <option value="Liver">liver</option>
                <option value="Kidney">kidney</option>
                <option value="Bone Marrow">bone marrow</option>
                <option value="Heart">heart</option>
            </select>
        </span>

        . They have no nucleus to make room for lots of haemoglobin. A nucleus  
        <span>        
            <select name="answer3" id="answer3" ref={inputAnswer3}>
                <option value="Mitochondria">contain enzymes needed for respiration</option>
                <option value="Nucleus">holds all the genetic material including DNA</option>
                <option value="Cytoplasm">is a jelly-like substance that contains nutrients, salts and enzymes required for chemical reactions</option>
            </select>
        </span>

        </p>

        {/* PHYSICS */}
        <h2>Physics</h2>
        <Image
          src="/circuit1.png"
          alt="Circuit Question 1"
          width="300"
          height="250"
        />

        <p>A physician wants to measure the voltage and the current across the LED. How should she set up her circuit?</p>
        <select name="circuit1" id="circuit1" ref={inputCircuit1}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>


    {/* MUSIC */}
    <h2>Music</h2>
    <h4>Qu1</h4>
    <p>Which Springsteen song is this lyrics from?</p>
        <ReactAudioPlayer
            src="/thunderRoad.mp3"
            controls    
        />
        <br></br>
      <select name="music1" id="music1" ref={inputMusic1}>
                <option value="The Promised Land">The Promised Land</option>
                <option value="Darkness on the Edge of Town">Darkness on the Edge of Town</option>
                <option value="Thunder Road">Thunder Road</option>
                <option value="Born to Run">Born to Run</option>
            </select>


    <h4>Qu2</h4>
    <p>Which artist wrote this lyric?</p>
        <ReactAudioPlayer
            src="/aliciaKeys.mp3"
            controls    
        />
        <br></br>
      <select name="music2" id="music2" ref={inputMusic2}>
                <option value="Springsteen">Springsteen</option>
                <option value="Taylor Swift">Taylor Swift</option>
                <option value="U2">U2</option>
                <option value="Alicia Keys">Alicia Keys</option>
            </select>

    <h4>Qu3</h4>
    <p>Which artist wrote this lyric?</p>
        <ReactAudioPlayer
            src="/U2.mp3"
            controls    
        />
        <br></br>
      <select name="music3" id="music3" ref={inputMusic3}>
                <option value="Springsteen">Springsteen</option>
                <option value="Taylor Swift">Taylor Swift</option>
                <option value="U2">U2</option>
                <option value="Alicia Keys">Alicia Keys</option>
            </select>


    <h4>Qu4</h4>
    <p>Which film is this song from?</p>
        <ReactAudioPlayer
            src="/BoleChudiyan.mp3"
            controls    
        />
        <br></br>
      <select name="music4" id="music4" ref={inputMusic4}>
                <option value="Kuch Kuch Hota Hai">Kuch Kuch Hota Hai</option>
                <option value="Kabhi Khushi Kabie Gham">Kabhi Khushi Kabie Gham</option>
                <option value="Kal Ho Naa Ho">Kal Ho Naa Ho</option>
                <option value="Mohabbatein">Mohabbatein</option>
            </select>


            <h4>Qu5</h4>
        <p>Which film is this song from?</p>
    <ReactAudioPlayer
        src="/AankheinKhuli.mp3"
        controls    
    />
    <br></br>
  <select name="music5" id="music5" ref={inputMusic5}>
                <option value="Kuch Kuch Hota Hai">Kuch Kuch Hota Hai</option>
                <option value="Kabhi Khushi Kabie Gham">Kabhi Khushi Kabie Gham</option>
                <option value="Kal Ho Naa Ho">Kal Ho Naa Ho</option>
                <option value="Mohabbatein">Mohabbatein</option>
        </select>

<br></br>

      <button className={styles.description} onClick={handleClick}>Submit Answers</button>
      </main>
    </div>
  )
}
