
import { Route, Routes } from 'react-router-dom'//used to go on different pages 
import './App.css'
import TextInputFormContainer from './components/TextInputForm/textinputformcontainer'
import StartGame from './pages/startGame'
import PlayGame from './pages/playGame'
import Home from './pages/home'
import { WordContext } from './context/wordcontext'
import { useState } from 'react'

function App() {

  const [wordList,setWordList]=useState([]);
  const [word,setWord]=useState('');
  const [hint ,setHint]=useState('')
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
