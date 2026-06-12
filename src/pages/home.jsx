import { Link } from "react-router-dom";
import Button from "../components/Button/button";
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../context/wordcontext";

function Home() {

    // const [word,setWord]=useState('');//to pass words from home to play page 

    //const [hint ,setHint]=useState('') using this also as context 

    const { setWordList, setWord, setHint } = useContext(WordContext);//setting the data as soon as it feteches 

    async function fetchData() {
        const response = await fetch('http://localhost:3000/words');//fetches data from the server 
        const data = await response.json();
        console.log(data)

        setWordList([...data]);

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex])

        setWord(data[randomIndex].wordValue)
        setHint(data[randomIndex].wordHint)

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div style={{
                minHeight: '100vh', background: '#0a0a0f',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Press Start 2P', monospace", position: 'relative', overflow: 'hidden'
            }}>

                <svg width="300" height="300" viewBox="0 0 140 130">
                    <line x1="20" y1="125" x2="120" y2="125" stroke="#5F5E5A" strokeWidth="3" strokeLinecap="round" />
                    <line x1="40" y1="125" x2="40" y2="10" stroke="#5F5E5A" strokeWidth="3" strokeLinecap="round" />
                    <line x1="40" y1="10" x2="80" y2="10" stroke="#5F5E5A" strokeWidth="3" strokeLinecap="round" />
                    <line x1="40" y1="30" x2="60" y2="10" stroke="#5F5E5A" strokeWidth="2" strokeLinecap="round" />
                    <line x1="80" y1="10" x2="80" y2="22" stroke="#B4B2A9" strokeWidth="2" strokeLinecap="round" />
                    <g style={{ animation: 'sway 3s ease-in-out infinite', transformOrigin: '80px 22px' }}>
                        <circle cx="80" cy="32" r="9" fill="none" stroke="#E8C547" strokeWidth="2" />
                        <line x1="80" y1="41" x2="80" y2="68" stroke="#E8C547" strokeWidth="2" strokeLinecap="round" />
                        <line x1="80" y1="50" x2="66" y2="60" stroke="#E8C547" strokeWidth="2" strokeLinecap="round" />
                        <line x1="80" y1="50" x2="94" y2="60" stroke="#E8C547" strokeWidth="2" strokeLinecap="round" />
                        <line x1="80" y1="68" x2="68" y2="84" stroke="#E8C547" strokeWidth="2" strokeLinecap="round" />
                        <line x1="80" y1="68" x2="92" y2="84" stroke="#E8C547" strokeWidth="2" strokeLinecap="round" />
                    </g>
                </svg>

                <h1 style={{
                    fontFamily: "'Creepster', cursive", fontSize: '52px',
                    color: '#E8C547', letterSpacing: '4px', margin: '0 0 4px'
                }}>HANGMAN</h1>

                <div style={{ display: 'flex', gap: '6px', marginBottom: '2.5rem' }}>
                    {'HANGMAN'.split('').map((l, i) => (
                        <div key={i} style={{
                            width: '32px', height: '38px', borderBottom: '2px solid #E8C547',
                            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                            fontFamily: "'Creepster', cursive", fontSize: '22px',
                            color: i === 0 ? '#E8C547' : 'transparent', paddingBottom: '2px'
                        }}>{l}</div>
                    ))}
                </div>

                <Link to="/play" /*state={{hint:hint}}*/>{/* now requirement of worSelected to pass like hint  */}
                    <div>
                        <Button text="Single Player " />
                    </div>
                </Link>
                <br />


                <Link to="/start">
                    <div className="mt-4">
                        <Button text="Multiplayer Player " styleType="secondary" />
                    </div>
                </Link>

                <style>{`
        
        @keyframes sway {
          0%,100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
      `}</style>

            </div>


        </>

    )
}

export default Home;