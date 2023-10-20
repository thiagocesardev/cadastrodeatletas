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



export const InputLabel = styled.p`
letter-spacing: 0.408px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
color: #eeeeee;

`;

export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px regba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
margin-bottom: 34px;
padding-left: 25px;
border: none;
outline: none;
font-size: 24px;
font-style: normal;
font-weight: normal;
line-height: 28px;
color: #FFFFFF;

`;

