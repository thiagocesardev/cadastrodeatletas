import React from 'react';
import {ContainerItens as Container} from './styles';

//isBlur foi teste para as cores diferente e teve afirmação de true no Container em index.js
function ContainerItens  ({children, isblur}){
    return <Container isblur={isblur}>{children}</Container>
}

export default ContainerItens;