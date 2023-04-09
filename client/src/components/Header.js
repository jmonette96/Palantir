import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import {CurrentUserContext} from "./CurrentUserContext";
import {useContext} from 'react';
import runes from '../assets/logo/lotrLogob.png'

const Header = () => {
    const navigate = useNavigate();
    const {currentUser} = useContext(CurrentUserContext);

    console.log(currentUser)

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "http://localhost:8000/logout";
    }

    return (
        <Wrapper>
            <Name onClick={ev => navigate(`/`)}>
                <Title><Logo alt="logo" src={runes}></Logo>Palantir</Title>
            </Name>
            {
                !currentUser ? (
                    <button><Link to={"http://localhost:8000/login"}>Log In</Link></button>
                ) : (
                    <div>
                        <button onClick={ev => navigate('/profile')}>Profile!</button>
                        <p>{currentUser.name}</p>
                        <img src={currentUser.picture}></img>
                    </div>

                )

            }

            <button onClick={() => handleLogout()}>Log Out</button>
        </Wrapper>
    )
}
const Logo = styled.img`
    height: 100px;
    background-color: 'transparent'
`;

const Title = styled.p`
    font-family: 'Bilbo', cursive;
    font-size: xx-large;
`;

const Name = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: large;
    font-weight: bold;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px ;
    border-radius: 1px;
    border-color: black;
    border-style: double;
`;


export default Header;