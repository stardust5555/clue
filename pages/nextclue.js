import Image from "next/image"

export default function NextClue(){
    return(
        <>
            <h1>Congratulations! You've found the next clue!</h1>
            <p>Using the wordle solution and the map below, find your next clue!</p>
            <Image
            src="/bookcase.png"
            alt="bookcase"
            width="800"
            height="500"
            />
        </>
    )
}