import React from 'react'

import { Container, Gira, DivPokebola, Button, Pokebola, Logo } from './Style'

import './Home.css'

import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()

  const pagePokeIndex = () => {
    navigate('/PokeIndex')
  }

  const pagePokedex = () => {
    navigate('/Pokedex')
  }

  const pageDetails = () => {
    navigate('/Details')
  }

  return (
    <Container>
      <Logo alt="homepage" src="img/logo.png" />
      <DivPokebola>
        <Button onClick={pagePokeIndex}>
           <Pokebola alt="Pokebola" src="img/pokebola.png" />
        </Button>
        </DivPokebola>
    </Container>
  )
}
