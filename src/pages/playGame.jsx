import { Link } from "react-router-dom";

function PlayGame(){
    return(
        <>
            <h1>play Game</h1>
            <Link to="/start" className="text-blue-300">Start game link  </Link>
        </>
    )
}

export default PlayGame;