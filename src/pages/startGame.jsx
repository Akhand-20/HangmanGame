import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/textinputformcontainer";

function StartGame(){
    return (
        <>
            <h1>Start Game</h1>
            <TextInputFormContainer/>
            <Link to="/play" className="text-blue-300"> Play game </Link>
        </>
        
    )
}

export default StartGame;