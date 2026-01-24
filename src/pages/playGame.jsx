import { Link, useLocation } from "react-router-dom";
import MaskedInput from "../components/MaskedInput/maskedInput";
import LetterButtons from "../components/LetterButtons/letterButtons";
import { useContext, useState ,useEffect} from "react";
import Hangman from "../components/HangMan/hangman";
import { WordContext } from "../context/wordcontext";
import Button from "../components/Button/button";

function PlayGame() {
    //useSearchParams gives array consist of whatever value is passed 
    // const [searchParams]=useSearchParams();//Always destructure hooks that return arrays
    // console.log(searchParams.get("text"))

    // const {text,id}=useParams();

    // const array= ['hello','world'] //rendering a list 
    // {array.map((element,idx)=><h1 key={idx} className="text-green-400 ">{element}</h1>)}


    const { state } = useLocation();//object destructuring 

    const { wordList, word, setWord, hint, setHint } = useContext(WordContext);//accessing it from home -->react context API

    const [guessedLetters, setGuessedLetters] = useState([]);

    const [step, setStep] = useState(0)

    const max_steps = 7;
    const isGameOver = step >= max_steps;
    const allLetters = new Set(word?.toUpperCase().split(''))

    const isWinner = [...allLetters].every(letters => guessedLetters.includes(letters))

    const isWin = isWinner && !isGameOver;

    useEffect(() => {//this is used to check if word is coming from multiplayer then set these else do that only 
        if (state?.wordSelected) {
            setWord(state.wordSelected);
            setHint(state.hint || "");
        }
    }, [state]);

 

    function handleLetterClick(letter) {
        //GameOver 
        if (isGameOver || isWin) return;
        //adding images part here
        if (word?.toUpperCase().includes(letter)) {
            console.log("Correct")
        } else {
            console.log("Wrong")
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter])//making a brand new array "..." spred operator Take all elements inside guessedLetters and copy them”
    }
    function restart() {
        if (wordList.length === 0) return;

        const randomWord = Math.floor(Math.random() * wordList.length);
        const newWord = wordList[randomWord].wordValue;
        const newHint = wordList[randomWord].wordHint;

        setWord(newWord);
        setHint(newHint);
        setGuessedLetters([]);
        setStep(0);
    }


    return (
        <>
            {/* <h1>Play Game {text} {id}</h1> */}
            <h1>Play Game</h1>
            {/* {wordList.map(wordObject=> <li key={wordObject.id}>{wordObject.wordValue}</li>)}printing the word list on play page which was accessed from home page  */}
            {word && (
                <>
                    <MaskedInput text={word} guessedLetters={guessedLetters} />

                    <div className="mt-4 p-3 bg-gray-200 rounded-md text-black">
                        <strong>Hint:</strong> {hint}
                    </div>

                    <div><LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} disabled={isGameOver || isWin} />
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
                                    Word was: <strong>{word}</strong>
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
                                    <strong> {word}</strong>
                                </p>
                                <Link to="/" className="text-blue-600 underline">
                                    Play Again
                                </Link>
                            </div>
                        </div>
                    )}
                </>
            )}
            <Button text="Restart" styleType="secondary" onClickHandler={restart} />
            <Link to="/" className="text-blue-300 bg-black m-3 text-3xl rounded items-center justify-center">Home</Link>
            {/* <Link to="/start" className="text-blue-300">Start game link  </Link> */}
        </>
    )
}

export default PlayGame;