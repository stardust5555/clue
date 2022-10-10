import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Biology() {

  let router = useRouter();

  const inputAnswer1 = useRef(null);
  const inputAnswer2 = useRef(null);

  function handleClick(){

    if(inputAnswer1.current.value==="Red Blood Cells" && inputAnswer2.current.value==="Bone Marrow"){
      alert("Correct!")
      router.push("/solved")
    }else{
      alert("Wrong answer - try again")
    }
    console.log(inputAnswer1.current.value)
    console.log(inputAnswer2.current.value)
  }




  return (
    <div className={styles.container}>
      <Head>
        <title>10</title>
      </Head>

      <main>
        <h1 className={styles.title}>Clue 10</h1>

        <p className={styles.description}> Well done! Fill in the missing fields to progress to the next clue!</p>

      <p>Certain types of cells carry haemoglobin. This cells are called
        <span>        
            <select name="answer1" id="answer1" ref={inputAnswer1}>
                <option value="Red Blood Cells">Red Blood Cells</option>
                <option value="White Blood Cells">White Blood Cells</option>
            </select>
        </span>

        . These cells are created in the 
        <span>        
            <select name="answer2" id="answer2" ref={inputAnswer2}>
                <option value="Liver">Liver</option>
                <option value="Kidney">Kidney</option>
                <option value="Bone Marrow">Bone Marrow</option>
                <option value="Heart">Heart</option>
            </select>
        </span>

        </p>

      <button onClick={handleClick}>Submit Answer</button>
      </main>
    </div>
  )
}
