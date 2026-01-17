import { Link, useLocation } from "react-router-dom";
import MaskedInput from "../components/MaskedInput/maskedInput";
import LetterButtons from "../components/LetterButtons/letterButtons";
import { useState } from "react";
import Hangman from "../components/HangMan/hangman";

function PlayGame() {
    //useSearchParams gives array consist of whatever value is passed 
    // const [searchParams]=useSearchParams();//Always destructure hooks that return arrays
    // console.log(searchParams.get("text"))

    // const {text,id}=useParams();

    // const array= ['hello','world'] //rendering a list 
    // {array.map((element,idx)=><h1 key={idx} className="text-green-400 ">{element}</h1>)}


    const { state } = useLocation();//object destructuring 

    const [guessedLetters, setGuessedLetters] = useState([]);

    const [step, setStep] = useState(0)

    const max_steps = 7;
    const isGameOver = step >= max_steps;
    const allLetters = new Set(state?.wordSelected.toUpperCase().split(''))

    const isWinner = [...allLetters].every(letters => guessedLetters.includes(letters))

    const isWin = isWinner && !isGameOver;


    function handleLetterClick(letter) {
        //GameOver 
        if (isGameOver || isWin) return;
        //adding images part here
        if (state?.wordSelected.toUpperCase().includes(letter)) {
            console.log("Correct")
        } else {
            console.log("Wrong")
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter])//making a brand new array "..." spred operator Take all elements inside guessedLetters and copy them”
    }


    return (
        <>
            {/* <h1>Play Game {text} {id}</h1> */}
            <h1>Play Game</h1>

            {state?.wordSelected && (
                <>
                    <MaskedInput text={state?.wordSelected} guessedLetters={guessedLetters} />

                    <div className="mt-4 p-3 bg-gray-200 rounded-md text-black">
                        <strong>Hint:</strong> {state?.hint}
                    </div>

                    <div><LetterButtons text={state?.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} disabled={isGameOver || isWin} />
                    </div>

                    <div>
                        <Hangman step={step} />
                    </div>
                    

                    {isGameOver && (
                        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-lg text-center">
                                <h2 className="text-2xl font-bold text-red-600 mb-3">
                                    Game Over 💀
                                </h2>
                                <p className="mb-4">
                                    Word was: <strong>{state?.wordSelected}</strong>
                                </p>
                                <Link
                                    to="/"
                                    className="text-blue-600 underline"
                                >
                                    Play Again
                                </Link>
                            </div>
                        </div>
                    )}

                    {isWin && (
                        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-lg text-center">
                                <h2 className="text-2xl font-bold text-green-600 mb-3">
                                    🎉 You Win!
                                </h2>
                                <p className="mb-4">
                                    You guessed the word:
                                    <strong> {state?.wordSelected}</strong>
                                </p>
                                <Link to="/" className="text-blue-600 underline">
                                    Play Again
                                </Link>
                            </div>
                        </div>
                    )}
                </>
            )}
            <Link to="/"className="text-blue-300 bg-black m-3 text-3xl rounded items-center justify-center">Home</Link>
            {/* <Link to="/start" className="text-blue-300">Start game link  </Link> */}
        </>
    )
}

export default PlayGame;