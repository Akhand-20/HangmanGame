
import { Route, Routes } from 'react-router-dom'//used to go on different pages 
import './App.css'
import TextInputFormContainer from './components/TextInputForm/textinputformcontainer'
import StartGame from './pages/startGame'
import PlayGame from './pages/playGame'

function App() {
  return (

      <Routes> 
        <Route path='/start' element={<StartGame/>}/>
        <Route path='/play' element={<PlayGame/>}/>
        <Route path='/' element={<div>Home</div>}/>
      </Routes>

      
   
  )
}

export default App
