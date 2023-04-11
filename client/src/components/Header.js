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
                <Logo alt="logo" src={runes}></Logo>
                <Title>Palantir</Title>
            </Name>
                {currentUser ? (
                    <span>
                        <UserProfile>
                            <UserImage src={currentUser.picture} alt={currentUser.name} />
                            <UserName>{currentUser.name}</UserName>
                        </UserProfile>
                        <ProfileButton onClick={ev => navigate('/profile')}>Profile</ProfileButton>
                        <LogoutButton onClick={() => handleLogout()}>Log Out</LogoutButton>
                    </span>
                ) : (
                    <LoginButton>
                        <Link to={"http://localhost:8000/login"} style={{ color: 'white', textDecoration: 'none' }}>Log In</Link>
                    </LoginButton>
                    )
                }
        </Wrapper>
    )
}
// #A68E6A
const Wrapper = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #767A52;
    border-radius: 1px;
    border-color: #643F16;
    border-style: double;
`;

const Name = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: large;
    font-weight: bold;
`;

const Logo = styled.img`
    height: 100px;
    background-color: transparent;
`;

const Title = styled.h1`
    font-family: 'Bilbo', cursive;
    margin-left: 10px;
    color: white;
    font-size: 55px;
`;
const UserImage = styled.img`
    width: 20%;
`;


const UserProfile = styled.span`
    display: flex;
    align-items: center;
`;

const UserName = styled.p`
    margin-left: 10px;
    color: white;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px 20px;
    margin: 0 10px;
`;

const ProfileButton = styled(Button)`
    background-color: #c4b479;
    color: white;
`;
    
const LoginButton = styled(Button)`
    background-color: #5c1014;
    color: white;
`;

const LogoutButton = styled(Button)`
    background-color: #5c1014;
    color: white;
`;



export default Header;