// REACT HOOK => useStale, useRef, useEffect (Efeiro colateral)

import React, { useState, useEffect } from "react";

import Avatar from '../../assets/people1.png';
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";
import ContainerItens from '../../components/ContainerItens';
import H1 from '../../components/Title';
import { useNavigate } from 'react-router';
import Button from "../../components/Button";

import {
  Container,
  Image,
  User,
} from "./styles";
import axios from "axios";


//REACT HOOT
function Users() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate()


  //Como comunicando com BackEnd


  //A minha aplicação inicia (A Paginda carregou, useEffect é chamado)
  // Quando um esrtado que está no array de dependencia do useEffect é alterado
  useEffect(() => {


    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)



    }
    fetchUsers()
  }, [])



  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers);

  }
  function goBackPage() {
    navigate("/");
  }

  return (
    <Container isblur={true}>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>USUÁRIOS</H1>
        <ul>
          {users.map((user) => (

            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" /></button>
            </User>
          ))}
        </ul>
        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users