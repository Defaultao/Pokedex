import React from 'react';

import {
    ButtonGB,
  } from './Style'

import { useNavigate } from 'react-router-dom';

const ButtonGoBack = ({ children }) => {

    const navigate = useNavigate();

    return (
        <ButtonGB>
        <button onClick={ () =>  navigate( - 1 ) }>
            { children }            
        </button>
        </ButtonGB>
    );
};

export default ButtonGoBack;