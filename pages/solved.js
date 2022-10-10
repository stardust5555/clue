import ReactAudioPlayer from 'react-audio-player';

export default function Solved(){
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
        </>
    )

}