import styled from "styled-components";
import Background from '../../assets/background10.png'

export const Container = styled.div`
        background: url("${Background}");
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        
        height: 100%;
        min-height: 100vh;
`;


export const Image = styled.img`
        margin-top: 30px

`;



export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px regba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
margin-top: 20px ;

p{
        font-size: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
}

button{
        background: none;
        border: none;
        cursor: pointer;
}

`
