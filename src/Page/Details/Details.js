import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL, BASE_URLIMG } from '../../Components/URLs/BASE_URL'
import axios from 'axios'
import ButtonGoBack from '../../Components/ButtonGoBack'

import {
  
  Container,
  Back,
  Image,
  Bluur,
  Card
 
} from './Style'

export default function Details() {
  const [pokemonDetail, setPokemonDetail] = useState({})
  const params = useParams()

  useEffect(() => {
    axios.get(`${BASE_URL}/${params.pokemon}`).then(({ data }) => {
      setPokemonDetail(data)
    })
  }, [])

  return (
    
    <>
    
    <Back>
    
      <ButtonGoBack>
        voltar
        </ButtonGoBack>
        </Back>
        
      <Container>
      <Card>
        <Bluur>
      <Image alt="Imagem do Pokemon" src={`${BASE_URLIMG}/${pokemonDetail.id}.gif`} /></Bluur>
      <p>Nome: {pokemonDetail.name}</p>
      <p>Altura: {pokemonDetail.height}</p>
      <p>Peso: {pokemonDetail.weight}</p>
      <p>Tipo: {pokemonDetail.types && pokemonDetail.types[0].type.name}</p>
      <p>
        Habilidades:{' '}
        {pokemonDetail.abilities && pokemonDetail.abilities[0].ability.name}
      </p>
    </Card>
    </Container>
    </>
  )
}
