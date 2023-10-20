import styled from "styled-components";


export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 130px;
background:#4F4F4F;
border-radius: 14px;
border: none;
color:#FFFFFF;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

£:hover{
        opacity: 0.8;

}
£:active{
        opacity: 0.5;

}

//Usando o SE na SETA
img {
	transform: ${ props => props.isBack && 'rotateY(180deg)'} ;
 }
`;