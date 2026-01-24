import { Link } from "react-router-dom";
import Button from "../components/Button/button";
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../context/wordcontext";

function Home(){

    // const [word,setWord]=useState('');//to pass words from home to play page 

    //const [hint ,setHint]=useState('') using this also as context 

    const {setWordList,setWord,setHint}=useContext(WordContext);//setting the data as soon as it feteches 

    async function fetchData(){
        const response= await fetch('http://localhost:3000/words');//fetches data from the server 
        const data = await response.json();
        console.log(data)

        setWordList([...data]);

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
            <Link to="/play" /*state={{hint:hint}}*/>{/* now requirement of worSelected to pass like hint  */}
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