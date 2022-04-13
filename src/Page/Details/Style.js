import styled from 'styled-components'

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  width: 100%;
  height: 94.6vh;
  justify-content: center;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 250px;
  margin-top: 15px;
  box-shadow: 0px 0px 10px 2px rgba(250, 250, 250, 0.6);
  backdrop-filter: blur(90px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  margin-bottom: 20px;
  
`
export const Back = styled.div`
  padding-top: 25px;
  background: #000;
  display: flex;
  justify-content: center;
`
export const Image = styled.img`
width: 100px;
`
export const Bluur = styled.div`
display: flex;
justify-content: center;

box-shadow: inset 10px 10px 10px green, 1px 1px 1em #00FF00;

margin-top: 15px;
height:100px;
width: 100px;
border-radius:50%;
margin-bottom: 20px;
}`