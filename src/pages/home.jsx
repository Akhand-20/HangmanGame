import { Link } from "react-router-dom";
import Button from "../components/Button/button";
import { useEffect, useState } from "react";

function Home(){

    const [word,setWord]=useState('');

    const [hint ,setHint]=useState('')

    async function fetchData(){
        const response= await fetch('http://localhost:3000/words');//fetches data from the server 
        const data = await response.json();
        console.log(data)

        const randomIndex= Math.floor(Math.random()*data.length);
        console.log(data[randomIndex])

        setWord(data[randomIndex].wordValue)
        setHint(data[randomIndex].wordHint)

    }

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <>
            <Link to="/play" state={{wordSelected:word,hint:hint}}>
               <div>
                     <Button text="Single Player "/>
               </div>
            </Link>
            <br />


            <Link to="/start">
                <div className="mt-4">
                    <Button text="Multiplayer Player "styleType="secondary"/>
                </div>
            </Link>
        
        
        </>

    )
}

export default Home;