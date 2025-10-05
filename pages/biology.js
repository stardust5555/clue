import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

export default function Biology() {
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

  function handleClick() {
    if (
      //BIOLOGY
      inputAnswer1.current.value === "Red Blood Cells" &&
      inputAnswer2.current.value === "Bone Marrow" &&
      inputAnswer3.current.value === "Nucleus" &&
      //PHYSICS
      inputCircuit1.current.value === "B" &&
      //MUSIC
      inputMusic1.current.value === "Prince" &&
      inputMusic2.current.value === "Elton John" &&
      inputMusic3.current.value === "Gaga" &&
      inputMusic4.current.value === "Kabhi Khushi Kabie Gham" &&
      inputMusic5.current.value === "Mohabbatein"
    ) {
      router.push("/solved");
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

        <h2>Biology</h2>

        <p>
          Certain types of cells carry haemoglobin. These cells are called
          <span>
            <select
              className={styles.inlineSelect}
              name="answer1"
              id="answer1"
              ref={inputAnswer1}
            >
              <option value="Red Blood Cells">red blood cells</option>
              <option value="White Blood Cells">white blood cells</option>
            </select>
          </span>
          . These cells are created in the
          <span>
            <select
              className={styles.inlineSelect}
              name="answer2"
              id="answer2"
              ref={inputAnswer2}
            >
              <option value="Liver">liver</option>
              <option value="Kidney">kidney</option>
              <option value="Bone Marrow">bone marrow</option>
              <option value="Heart">heart</option>
            </select>
          </span>
          . They have no nucleus to make room for lots of haemoglobin. A nucleus
          <span>
            <select
              className={styles.inlineSelect}
              name="answer3"
              id="answer3"
              ref={inputAnswer3}
            >
              <option value="Mitochondria">
                contains enzymes needed for respiration.
              </option>
              <option value="Nucleus">
                holds all the genetic material including DNA.
              </option>
              <option value="Cytoplasm">
                is a jelly-like substance where chemical reactions take place.
              </option>
            </select>
          </span>
        </p>

        {/* PHYSICS */}
        <h2>Physics</h2>
        <Image
          src="/circuit1.png"
          alt="Circuit Question 1"
          width="350"
          height="300"
        />

        <p>
          An engineer wants to measure the voltage and the current across the
          LED. How should she set up her circuit?
        </p>
        <select
          className={styles.select}
          name="circuit1"
          id="circuit1"
          ref={inputCircuit1}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>

        {/* MUSIC */}
        <h2>Music</h2>
        <h4>Qu1</h4>
        <p>Which artist wrote this song?</p>
        <button
          className={styles.speakButton}
          onClick={() => speak("I never meant to cause you any sorrow. I never meant to cause you any pain.")}
        >
          🗣️ Play lyric
        </button>
        <br></br>
        <br></br>
        <select
          className={styles.select}
          name="music1"
          id="music1"
          ref={inputMusic1}
        >
          <option value="Springsteen">Springsteen</option>
          <option value="Prince">
            Prince
          </option>
          <option value="Whitney Houston">Whitney Houston</option>
          <option value="ABBA">ABBA</option>
        </select>

        <p>Which artist wrote this song?</p>
        <button
          className={styles.speakButton}
          onClick={() => speak("She packed my bags last night pre-flight, zero hour, 9 a.m.")}
        >
          🗣️ Play lyric
        </button>
        <br></br>
        <br></br>
        <select
          className={styles.select}
          name="music1"
          id="music1"
          ref={inputMusic2}
        >
          <option value="Led Zepplin">Led Zepplin</option>
          <option value="Elton John">
            Elton John
          </option>
          <option value="Queen">Queen</option>
          <option value="Creedance">Creedance</option>
        </select>

        <p>Which artist wrote this song?</p>
        <button
          className={styles.speakButton}
          onClick={() => speak("Not sure what it means. But this photo of us, it don't have a price. Ready for those flashing lights.")}
        >
          🗣️ Play lyric
        </button>
        <br></br>
        <br></br>
        <select
          className={styles.select}
          name="music1"
          id="music1"
          ref={inputMusic3}
        >
          <option value="Beyonce">Beyonce</option>
          <option value="Gaga">
            Gaga
          </option>
          <option value="Sabrina Carpenter">Sabrina Carpenter</option>
          <option value="Taylor Swift">Taylor Swift</option>
        </select>

        <p>Which film is this song from?</p>
        <ReactAudioPlayer src="/BoleChudiyan.mp3" controls />
        <br></br>
        <br></br>
        <select
          className={styles.select}
          name="music4"
          id="music4"
          ref={inputMusic4}
        >
          <option value="Kuch Kuch Hota Hai">Kuch Kuch Hota Hai</option>
          <option value="Kabhi Khushi Kabie Gham">
            Kabhi Khushi Kabie Gham
          </option>
          <option value="Kal Ho Naa Ho">Kal Ho Naa Ho</option>
          <option value="Mohabbatein">Mohabbatein</option>
        </select>

        <h4>Qu5</h4>
        <p>Which film is this song from?</p>
        <ReactAudioPlayer src="/AankheinKhuli.mp3" controls />
        <br></br>
        <br></br>
        <select
          className={styles.select}
          name="music5"
          id="music5"
          ref={inputMusic5}
        >
          <option value="Kuch Kuch Hota Hai">Kuch Kuch Hota Hai</option>
          <option value="Kabhi Khushi Kabie Gham">
            Kabhi Khushi Kabie Gham
          </option>
          <option value="Kal Ho Naa Ho">Kal Ho Naa Ho</option>
          <option value="Mohabbatein">Mohabbatein</option>
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
