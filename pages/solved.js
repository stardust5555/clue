import ReactAudioPlayer from 'react-audio-player';
import { useRouter } from 'next/router';
import { useRef } from 'react';

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
        <>
        <h1>Congratulations!</h1>
        <h3>Here's the next clue...</h3>
        <p>Clip 1</p>
            <ReactAudioPlayer
                src="/spanish.mp3"
                controls    
            />
        <p>Clip 2</p>
        <ReactAudioPlayer
            src="/guju.mp3"
            controls    
        />
        <p>Clip 3</p>
        <ReactAudioPlayer
            src="/french.mp3"
            controls    
        />

        <h3>Once you've found the next clue, enter the password...</h3>

        <p>Enter the password</p>
        <label for="password">Password:</label>
        <input
        ref={inputPassword}
        type="text"
        id="password"
        name="password"
      />

        <button onClick={handleClick}>Submit Answer</button>
        </>
    )

}