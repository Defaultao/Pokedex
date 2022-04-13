import React, { useState } from 'react'

import { BASE_URL, BASE_URLIMG } from '../../Components/URLs/BASE_URL'

import { useRequestpokes } from '../../Hooks/UseRequestpokes'

import { useNavigate } from 'react-router-dom'

import ButtonGoBack from '../../Components/ButtonGoBack'

import {
  Card,
  Container,
  ContainerImg,
  ContainerName,
  ButtonAdd,
  ButtonDetails,
  Bluur,
  Pokedex,
  Header,
  HeaderButton,
  ImgPokes
} from './Style'

export default function PokeIndex() {
  const navigate = useNavigate()

  const [pokemons, isLoading, error] = useRequestpokes(`${BASE_URL}`, [])
  const [pokedex, setPokedex] = useState([])

  const pagePokedex = () => {
    navigate('/Pokedexx')
  }

  const pokemonDetails = id => {
    navigate(`/Details/${id + 1}`)
  }

  const addPokemonToPokedex = name => {
    const newPokemons = [
      ...pokedex,
      {
        name: name
      }
    ]
    setPokedex(newPokemons)
  }

  const renderPokemonList = pokemons.map((pokemon, i) => {
    return (
      <Card key={i} className="main">
        <ContainerImg>
          <ButtonAdd>
            <button>Adicionar</button>
          </ButtonAdd>

          <ButtonDetails>
            <button onClick={() => pokemonDetails(i)}>Detalhes</button>
          </ButtonDetails>

          <Bluur>
            <ImgPokes
              alt="Imagens dos Pokemons"
              src={`${BASE_URLIMG}/${i + 1}.gif`}
              lazy="Loading"
            />
          </Bluur>

          <ContainerName>
            <p>{pokemon.name.toUpperCase()}</p>
          </ContainerName>
        </ContainerImg>
      </Card>
    )
  })

  return (
    <>
      <Header>
        <Pokedex className="header" src="./img/pokemons.png" />
        <HeaderButton className="back">
          <ButtonGoBack>Voltar</ButtonGoBack>
        </HeaderButton>
        <div></div>
        <HeaderButton className="pokedex">
          <button onClick={pagePokedex}>Pokedéx</button>
        </HeaderButton>
      </Header>

      <Container>
        {isLoading && <p>Loading...</p>}

        {!isLoading && error && <p>Ocorreu algúm erro desculpe.</p>}

        {!isLoading &&
          renderPokemonList &&
          renderPokemonList.length > 0 &&
          renderPokemonList}
      </Container>
    </>
  )
}
