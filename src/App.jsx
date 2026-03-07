import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import { useState, useEffect } from 'react'
import './App.css'
import PokemonCard from './components/Card'

function App() {
  



  return (
      <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Inicio/>} />
        </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
