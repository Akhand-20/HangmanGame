import { Link, useLocation } from "react-router-dom";
import MaskedInput from "../components/MaskedInput/maskedInput";
import LetterButtons from "../components/LetterButtons/letterButtons";
import { useContext, useState, useEffect } from "react";
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
            <div
                style={{
                    minHeight: "100vh",
                    background: "#0a0a0f",
                    color: "#E8C547",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "30px",
                    fontFamily: "'Press Start 2P', monospace",
                }}
            >
                {/* <h1>Play Game {text} {id}</h1> */}
                <h1 style={{
                    fontFamily: "'Creepster', cursive",
                    fontSize: "52px",
                    color: "#E8C547",
                    letterSpacing: "4px",
                    marginBottom: "20px",
                }} >Play Game</h1>
                {/* {wordList.map(wordObject=> <li key={wordObject.id}>{wordObject.wordValue}</li>)}printing the word list on play page which was accessed from home page  */}
                {word && (
                    <>
                        <div style={{ marginBottom: "20px" }}>
                            <MaskedInput
                                text={word}
                                guessedLetters={guessedLetters}
                            />
                        </div>

                        <div style={{
                            background: "#1a1a24",
                            color: "#fff",
                            border: "1px solid #E8C547",
                            borderRadius: "10px",
                            padding: "12px 18px",
                            marginBottom: "20px",
                        }}>

                            <strong>Hint:</strong> {hint}
                        </div>

                        <div><LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} disabled={isGameOver || isWin} />
                        </div>

                        <div
                            style={{
                                background: "#d8c9a3",
                                padding: "10px",
                                borderRadius: "15px",
                                width: "550px",
                            }}
                        >
                            <Hangman step={step} />
                        </div>

                        {/* <div style={{ marginBottom: "30px" }}>
                            <LetterButtons
                                text={word}
                                guessedLetters={guessedLetters}
                                onLetterClick={handleLetterClick}
                                disabled={isGameOver || isWin}
                            />
                        </div> */}

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
                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        marginTop: "30px",
                    }}>
                    <Button
                        text="Restart"
                        styleType="secondary"
                        onClickHandler={restart}
                    />
                    <Link to="/">
                        <button
                            style={{
                                background: "#E8C547",
                                color: "#000",
                                padding: "12px 20px",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                        >
                            Home
                        </button>
                    </Link>
                    {/* <Link to="/start" className="text-blue-300">Start game link  </Link> */}
                </div>
            </div>
        </>
    )
}

export default PlayGame;