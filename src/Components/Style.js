import styled from "styled-components";

export const ButtonGB = styled.div`
button {
 background-color: rgb(192,192,192);
 border: 1px solid rgb(0, 0, 0);
 padding: 2px 7px;
 border-radius: 100px;
 transition: .3s;
 color: #000;
 cursor:pointer;
 width: 66px;
}

button:hover {
 border: 1px solid #fff;
 background-color: transparent;
 color: #fff;
}
`
export const Header = styled.div`
  background: #000;
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 0.4fr 0.1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "header header header"
    "back meio pokedex"; 
}
.header {
  justify-self: center; 
  grid-area: header; 
}
.meio {
  justify-self: center; 
  width: 50%; 
}
.back {
  justify-self: center; 
  grid-area: back;
  width: 25%;  
}
.pokedex {
  justify-self: center; 
  grid-area: pokedex; 
  width: 25%; 
}
`