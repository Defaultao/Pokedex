import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Homepage/Homepage'
import Pokeindex from '../src/Page/Pokeindex/Pokeindex'
import Pokedexx from './Page/Pokedex/Pokedexx'
import Details from '../src/Page/Details/Details'
import GlobalStyle from './Components/GlobalStyle'

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
        
          <Route path={'/PokeIndex'} element={<Pokeindex />} />
        
          <Route path={'/Pokedexx'} element={<Pokedexx />} />
       
          <Route path={'/Details/:pokemon'} element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
