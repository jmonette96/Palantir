import movies from '../assets/movie_pictures/simplyMordor.gif';
import books from '../assets/book_pictures/bookGif.gif'
import frodo from '../assets/character_pictures/squad.gif';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import scroll from '../assets/character_pictures/scroll.png'


const Homepage = () => {
    const navigate = useNavigate();

    return (
        <BigWrapper>
            <Wrapper>
                <Scroll style={{ display: "flex", justifyContent: "center" }}>
                    <GreetingContainer>
                        <GreetingImage src={scroll} alt="scroll" />
                        <GreetingTitle>Welcome to Palantir!</GreetingTitle>
                        <GreetingText> This site gives you access to information about the books movies and characters of the greatest franchise in the world...</GreetingText>
                        <GreetingLotr>The Lord of the Rings!</GreetingLotr>
                    </GreetingContainer>
                </Scroll>
                <Buttons>
                    <ButtonContainer>
                        <ButtonTitle onClick={ev => navigate(`/books`)}>Books</ButtonTitle>
                        <BooksButton onClick={ev => navigate(`/books`)}>
                            <ButtonImage alt="books" src={books}></ButtonImage>
                        </BooksButton>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonTitle onClick={ev => navigate(`/movies`)}>Movies</ButtonTitle>
                        <MoviesButton onClick={ev => navigate(`/movies`)}>
                            <ButtonImage alt="movies" src={movies}></ButtonImage>
                        </MoviesButton>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonTitle onClick={ev => navigate(`/characters`)}>Characters</ButtonTitle>
                        <CharactersButton onClick={ev => navigate(`/characters`)}>
                            <ButtonImage alt="characters" src={frodo}></ButtonImage>
                        </CharactersButton>
                    </ButtonContainer>
                </Buttons>
            </Wrapper>
        </BigWrapper>
    )
}

const BigWrapper  = styled.div`
    display: flex;
    justify-content: center;
    background-size: 20px 20px;
    margin: 100px 200px; 
    min-height: 75vh;
`;

const Wrapper = styled.span`
`;
const Scroll = styled.span`
    margin:20px;
`;
const GreetingContainer = styled.span`
    max-width: 600px;
    position: relative;
`;

const GreetingImage = styled.img`
    max-width: 100%;
    height: auto;
`;

const GreetingText = styled.p`
    position: absolute;
    text-align:center;
    top: 45%;
    left: 45%;
    transform: translate(-50%, -50%);
    padding: 0px;
    font-size: 0.7em;
    font-weight: bold;
    margin: 20px;
    width: 70%;
`;

const GreetingLotr = styled.p`
    position: absolute;
    text-align:center;
    top: 67%;
    left: 45%;
    transform: translate(-50%, -50%);
    padding: 0px;
    font-weight: bold;
    font-style: italic;
    margin: 20px;
    width: 70%;
`;
const GreetingTitle = styled.h2`
    position: absolute;
    top: 20%;
    left: 45%;
    transform: translate(-50%, -50%);
    padding: 0px;
    font-weight: bold;
    margin: 20px;
`;

const Buttons = styled.span`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40%;
`;

const ButtonImage = styled.img`
`;

const ButtonContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;

const ButtonTitle = styled.h1`
    background: linear-gradient(to top, #a38e66, #735f45, #643f16);
    background-size: contain;
    padding: 9px;
    border-radius: 15%;
    font-weight: bold;
    margin-bottom: 1rem;
    color:white;
    cursor: pointer;
    :hover{
        color: #5c1014;
    }
`;

const Button = styled.button`
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    cursor: pointer;
`;

const CharactersButton = styled(Button)`
    height: 100%;
    img {
        height: 100%;
        width: 95%;
    }
`;

const BooksButton = styled(Button)`
    height: 100%;
    img {
        height: 100%;
        width: 95%;
    }
`;

const MoviesButton = styled(Button)`
    height: 100%;
    img {
        height: 100%;
        width: 95%;
    }
`;
export default Homepage;