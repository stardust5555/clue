import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const inputStartSquare = useRef(null);
  const inputEndSquare = useRef(null);
  const [error, setError] = useState(null);
  const [errorKey, setErrorKey] = useState(0) // new state

  function handleClick() {
    const start = inputStartSquare.current.value.trim().toLowerCase();
    const end = inputEndSquare.current.value.trim().toLowerCase();
    if (start === "a3" && end === "b1") {
      router.push("/biology");
    } else {
      setError("❌ Wrong answer. Try again!")
       setErrorKey(prev => prev + 1) // triggers rerender even if same message
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Chess</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>♟️ Clue 3: Chess</h1>

        <Image
          src="/chess2.png"
          alt="Chess Puzzle"
          width={300}
          height={300}
          className={styles.image}
        />

        <p className={styles.subtitle}>
          What is the <strong>winning move</strong> (mate in one)?
          <br />
          Format: <em>e.g. H6 to G8</em>
        </p>

        <div className={styles.inputRow}>
          <input
            ref={inputStartSquare}
            type="text"
            placeholder="Start (e.g. H6)"
            className={styles.input}
          />
          <span className={styles.toText}>to</span>
          <input
            ref={inputEndSquare}
            type="text"
            placeholder="End (e.g. G8)"
            className={styles.input}
          />
        </div>

        <button className={styles.button} onClick={handleClick}>
          ✅ Submit Answer
        </button>
        <p className={`${error ? styles.inputError : ""}`}>
        {error && <p key={errorKey} className={styles.error}>{error}</p>}
        </p>
      </main>
    </div>
  );
}
