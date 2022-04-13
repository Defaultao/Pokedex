import styled from 'styled-components'

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  width: 100%;
  justify-content: center;
  

  @media screen and (min-width: 570px)  and (max-device-width : 800px){
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr; 
  gap: 0px 0px; 
  justify-content: center; 
  justify-items: center; 
}

  @media screen and (min-width: 815px)  and (max-device-width : 865px){
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 0px 0px; 
  justify-content: center; 
  justify-items: center; 
}

@media screen and (min-width: 870px)  and (max-device-width : 1170px){
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 0px 0px; 
  justify-content: center; 
  justify-items: center; 
}

@media screen and (min-width: 1171px){
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  gap: 0px 0px; 
  justify-content: center; 
  justify-items: center; 
}
`

export const Header = styled.div`
  background: #000;
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr 1fr 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 0.4fr 0.1fr; 
  
  grid-template-areas: 
    "header header header"
    "back meio pokedex"; 

.header {
  justify-self: center; 
  grid-area: header;
}

.back {
  justify-self: center; 
  grid-area: back;
}
.meio {
  justify-self: center; 
}
.pokedex {
  justify-self: center; 
  grid-area: pokedex; 
}
`

export const Pokedex = styled.img`
  height: 7vh;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #fff; */
  height: 350px;
  width: 250px;
  margin-top: 15px;
  box-shadow: 0px 0px 10px 2px rgba(250, 250, 250, 0.6);
  backdrop-filter: blur(90px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  margin-bottom: 20px;
  
`

export const ContainerImg = styled.div`
  display: flex;
  -webkit-animation: rotate-anime 3s linear infinite;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  border-radius: 10px;
`

export const ContainerName = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 60%;
  font-weight: bold;
  border-radius: 10px;
`

export const ImgPokes = styled.img`
    height: 80px;

`
export const Bluur = styled.div`
display: flex;
justify-content: center;

box-shadow: inset 10px 10px 10px green, 1px 1px 1em #00FF00;

margin-top: 15px;
height:150px;
width: 100px;
border-radius:50%;
margin-bottom: 20px;
}`

export const ButtonAdd = styled.div`
  position: fixed;
  margin-top: 5px;
  margin-left: 4px;
  top: 0;
  left: 0;

  button {
    background-color: rgb(192, 192, 192);
    border: 1px solid rgb(0, 0, 0);
    padding: 2px 7px;
    border-radius: 100px;
    transition: 0.3s;
    color: #000;
    cursor: pointer;
  }

  button:hover {
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
  }
`
export const ButtonDetails = styled.div`
  position: fixed;
  margin-top: 5px;
  margin-right: 4px;
  padding: 1px 1px;
  top: 0;
  right: 0;

  button {
    background-color: rgb(192, 192, 192);
    border: 1px solid rgb(0, 0, 0);
    padding: 2px 7px;
    border-radius: 100px;
    transition: 0.3s;
    color: #000;
    cursor: pointer;
  }

  button:hover {
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
  }
`

export const HeaderButton = styled.div`
  button {
    background-color: rgb(192, 192, 192);
    border: 1px solid rgb(0, 0, 0);
    padding: 2px 7px;
    border-radius: 100px;
    transition: 0.3s;
    color: #000;
    cursor: pointer;
  }

  button:hover {
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
  }
`
