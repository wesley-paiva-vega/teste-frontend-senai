import React from 'react';
 
 
 import { Button ,InputText,Title,Main, Container, WrapperButtonText } from "./styles";
 
 import Tasks from '../tasks'
 import { useState, useEffect } from 'react'

 
 const Home = () => {
     const [ tasks, setTaks ] = useState()

     useEffect(() => {
        

     },[tasks])
     
     const handleTasks = (e) => {

        
        
     }
     return (
        <Container>
            <Main>
                <Title>Cadastrar Tarefas</Title>
                <WrapperButtonText>
                    <InputText onChange={handleTasks}/>
                    <Button
                        onClick={handleTasks}
                    >Salvar Tarefa</Button>
                </WrapperButtonText>
            <Tasks></Tasks>
            </Main>
        </Container>
    )
}

export default Home;