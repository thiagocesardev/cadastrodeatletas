// REACT HOOK => useStale, useRef, useEffect (Efeiro colateral)

import React, { useState, useRef } from "react";
import axios from "axios";
import People from '../../assets/people1.png';
import Arrow from "../../assets/arrow.svg";
import { useNavigate } from "react-router";


import ContainerItens from '../../components/ContainerItens'
import Button from "../../components/Button";
import H1 from '../../components/Title'

import {
  Container,
  Image,
 
  InputLabel,
  Input,


} from "./styles";





//REACT HOOT
function App() {
  const navigate = useNavigate ();

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  //Como comunicando com BackEnd
  async function addNewUser() {

    //Peguei só o data, que são os dados do usuários
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });


    setUsers([...users, newUser,]);
    navigate ("/usuarios");

  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>CADASTRO</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Digite Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Digite Idade" />

        <Button onClick={addNewUser}>
          Cadastrar<img alt="seta" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default App