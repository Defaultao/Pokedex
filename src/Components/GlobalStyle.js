import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica',"Coda", 'sans serif';
    align:center;
    ::-webkit-scrollbar {
    width:5px;
    height: 10px;
    }
    ::-webkit-scrollbar-track {
    background:#000;
    }
    ::-webkit-scrollbar-thumb {
    background: #2e9dd8;
    }
}

`
export default GlobalStyle;