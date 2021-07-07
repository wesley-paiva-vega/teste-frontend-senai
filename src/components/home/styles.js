import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Main = styled.div`
    width: 50vw;
    height: 70vh;
    border-radius: 4rem;
    background-color: #e1f4cb;
    display: flex;
    flex-direction: column;
`


export const Title = styled.h1`
    color: #717568;
    text-align: center;
    margin-top: 2rem;
`

export const InputText = styled.input`
    width: 60%;
    height: 50%;
    border: none;
    background-color: #717568;
    color: #e1f4cb;
`

export const Button = styled.button`
    width: 20%;
    height: 50%;
    border: none;
    border-radius: 5rem;
    background-color: #717568;
    color: #e1f4cb;
    font-size: 1rem;

    &:hover {
        filter: brightness(0.8);
    }
`


export const WrapperButtonText = styled.div`
    height: 10%;
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem
`