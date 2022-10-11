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
        <>
        <h1>Congratulations!</h1>
        <h3>Here's the next clue...</h3>

        <h4>Option 1</h4>
        <p>તે સફરજનના બાઉલમાં છે</p>

        <h4>Option 2</h4>
        <p>Clip 1</p>
            <ReactAudioPlayer
                src="/spanish.mp3"
                controls    
            />
        <p>Clip 2</p>
        <ReactAudioPlayer
            src="/guju2.mp3"
            controls    
        />
        <p>Clip 3</p>
        <ReactAudioPlayer
            src="/french2.mp3"
            controls    
        />

        
        <p>OMIT THIS: Here's the link they find in the fruit bowl:  </p>
        <Link href="https://mywordle.strivemath.com/?word=ohlgj"><a>https://mywordle.strivemath.com/?word=ohlgj</a></Link>


<br></br>
<br></br>
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