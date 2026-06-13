
import { Route, Routes } from 'react-router-dom'//used to go on different pages 
import './App.css'
// import TextInputFormContainer from './components/TextInputForm/textinputformcontainer'
import StartGame from './pages/startGame'
import PlayGame from './pages/playGame'
import Home from './pages/home'
import { WordContext } from './context/wordcontext'
import { useState ,useEffect} from 'react'

function App() {

  const [wordList,setWordList]=useState([]);
  const [word,setWord]=useState('');
  const [hint ,setHint]=useState('')
   useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://hangman-json-server-6jku.onrender.com/words');
      const data = await response.json();
      setWordList(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      setWord(data[randomIndex].wordValue);
      setHint(data[randomIndex].wordHint);
    }
    fetchData();
  }, []);
  return (
    <WordContext.Provider value={{wordList,setWordList,word ,setWord,hint,setHint}}>{/*these are now available to all*/}
      <Routes> 
        <Route path='/start' element={<StartGame/>}/>
        <Route path='/play' element={<PlayGame/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </WordContext.Provider>
      
   
  )
}

export default App
