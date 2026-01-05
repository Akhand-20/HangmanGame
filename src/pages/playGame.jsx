import { Link, useLocation } from "react-router-dom";
import MaskedInput from "../components/MaskedInput/maskedInput";

function PlayGame(){
//useSearchParams gives array consist of whatever value is passed 
    // const [searchParams]=useSearchParams();//Always destructure hooks that return arrays
    // console.log(searchParams.get("text"))

    // const {text,id}=useParams();

    // const array= ['hello','world'] //rendering a list 
    // {array.map((element,idx)=><h1 key={idx} className="text-green-400 ">{element}</h1>)}

    
    const {state} = useLocation();//object destructuring 
    return(
        <>
            {/* <h1>Play Game {text} {id}</h1> */}
            <h1>Play Game {state.wordSelected}</h1>
            <MaskedInput text={state.wordSelected} guessedLetters={['h','e']}/>
            <Link to="/start" className="text-blue-300">Start game link  </Link>
        </>
    )
}

export default PlayGame;