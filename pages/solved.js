import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

export default function Solved() {
  function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Optional: Choose a female voice
    const voices = synth.getVoices();
    const femaleEnglishVoice = voices.find(
      (v) => v.lang === "en-US" && v.name.includes("Female")
    );

    if (femaleEnglishVoice) {
      utterance.voice = femaleEnglishVoice;
    }

    synth.speak(utterance);
  }

  let router = useRouter();
  const [error, setError] = useState(null);
  const [errorKey, setErrorKey] = useState(0); // new state

  //BIOLOGY
  const inputHindu1 = useRef(null);
  const inputHindu2 = useRef(null);
  const inputHindu3 = useRef(null);

  //PHYSICS
  const inputFood1 = useRef(null);
  const inputFood2 = useRef(null);
  const inputFood3 = useRef(null);
  const inputFood4 = useRef(null);

  function handleClick() {
    if (
      //HINDUISM
      inputHindu1.current.value === "Vishnu" &&
      inputHindu2.current.value === "Samsara" &&
      inputHindu3.current.value === "Parvati"
      //FOOD
     // inputFood1.current.value === "ઢોકળા" &&
     // inputFood2.current.value === "ખાંડવી" &&
     // inputFood3.current.value === "સમોસા" &&
     // inputFood4.current.value === "થેળા"
    ) {
      router.push("/nextclue");
    } else {
      setError("❌ One of your answers is wrong. Try again!");
      setErrorKey((prev) => prev + 1); // triggers rerender even if same message
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>4</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Clue 4: Mini Quiz</h1>

        <p className={styles.description}>
          {" "}
          Well done! Fill in the missing fields to progress to the next clue!
        </p>

        <h2>Hinduism</h2>
        <p>Which of these gods is part of the Hindu Trimurti?</p>
        <select
          className={styles.select}
          name="circuit1"
          id="circuit1"
          ref={inputHindu1}
        >
          <option value="Krishna">Krishna</option>
          <option value="Lakshmi">Lakshmi</option>
          <option value="Vishnu">Vishnu</option>
          <option value="Hanuman">Hanuman</option>
        </select>

        <p>What is the cycle of birth, death, and rebirth called?</p>
        <select
          className={styles.select}
          name="circuit1"
          id="circuit1"
          ref={inputHindu2}
        >
          <option value="Dharma">Dharma</option>
          <option value="Moksha">Moksha</option>
          <option value="Karma">Karma</option>
          <option value="Samsara">Samsara </option>
        </select>

        <p>
          What one of the names of Shiva’s wife who is also a fierce goddess?
        </p>
        <select
          className={styles.select}
          name="circuit1"
          id="circuit1"
          ref={inputHindu3}
        >
          <option value="Saraswati">Saraswati</option>
          <option value="Parvati">Parvati </option>
          <option value="Sita">Sita</option>
          <option value="Draupadi">Draupadi </option>
        </select>

        <br></br>
        <h2>Dishes</h2>
        <p>Match the dishes to their names.</p>
        <Image
          className={styles.image}
          src="/sponge.jpg"
          alt="Circuit Question 1"
          width="350"
          height="300"
        />
        <select
          className={styles.select}
          name="circuit1"
          id="circuit1"
          ref={inputFood1}
        >
          <option value="ઢોકળા">ઢોકળા</option>
          <option value="ખાંડવી">ખાંડવી </option>
          <option value="સમોસા">સમોસા</option>
          <option value="થેળા">થેળા </option>
        </select>
              <br></br>
                    <br></br>

        <Image
          className={styles.image}
          src="/roly.jpg"
          alt="Circuit Question 1"
          width="350"
          height="300"
        />
        <select
          className={styles.select}
          name="circuit1"
          id="circuit1"
          ref={inputFood2}
        >
          <option value="ઢોકળા">ઢોકળા</option>
          <option value="ખાંડવી">ખાંડવી </option>
          <option value="સમોસા">સમોસા</option>
          <option value="થેળા">થેળા </option>
        </select>
              <br></br>
                    <br></br>

        <Image
          className={styles.image}
          src="/samosa.jpg"
          alt="Circuit Question 1"
          width="350"
          height="300"
        />
        <select
          className={styles.select}
          name="circuit1"
          id="circuit1"
          ref={inputFood3}
        >
          <option value="ઢોકળા">ઢોકળા</option>
          <option value="ખાંડવી">ખાંડવી </option>
          <option value="સમોસા">સમોસા</option>
          <option value="થેળા">થેળા </option>
        </select>
              <br></br>
                    <br></br>

        <Image
          className={styles.image}
          src="/roti.jpg"
          alt="Circuit Question 1"
          width="350"
          height="300"
        />
        <select
          className={styles.select}
          name="circuit1"
          id="circuit1"
          ref={inputFood4}
        >
          <option value="ઢોકળા">ઢોકળા</option>
          <option value="ખાંડવી">ખાંડવી </option>
          <option value="સમોસા">સમોસા</option>
          <option value="થેળા">થેળા </option>
        </select>
      <br></br>
            <br></br>
            
        <button className={styles.button} onClick={handleClick}>
          Submit Answers
        </button>
        <p className={`${error ? styles.inputError : ""}`}>
          {error && (
            <p key={errorKey} className={styles.error}>
              {error}
            </p>
          )}
        </p>
      </main>
    </div>
  );
}
