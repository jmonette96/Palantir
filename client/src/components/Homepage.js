import movies from '../assets/movie_pictures/movies.jpg';
import books from '../assets/book_pictures/books.jpg'
import frodo from '../assets/character_pictures/char.jpg';
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";



const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Greeting>Welcome to Palantir!</Greeting>
            <Greeting>This site is a gives you access to information about the books movies and characters of the greatest franchise in the world... The Lord of the Rings!</Greeting>
            <Buttons>
                <ButtonContainer>
                    <ButtonTitle>Books</ButtonTitle>
                    <BooksButton onClick={ev => navigate(`/books`)}>
                        <ButtonImage alt="books" src={books}></ButtonImage>
                    </BooksButton>
                </ButtonContainer>
                <ButtonContainer>
                    <ButtonTitle>Movies</ButtonTitle>
                    <MoviesButton onClick={ev => navigate(`/movies`)}>
                        <ButtonImage alt="movies" src={movies}></ButtonImage>
                    </MoviesButton>
                </ButtonContainer>
                <ButtonContainer>
                    <ButtonTitle>Characters</ButtonTitle>
                    <CharactersButton onClick={ev => navigate(`/characters`)}>
                        <ButtonImage alt="characters" src={frodo}></ButtonImage>
                    </CharactersButton>
                </ButtonContainer>
            </Buttons>
        </div>
    )
}
const Greeting = styled.p`
    font-weight: bold;
    font-size: x-large;
    margin: 20px;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
`;

const ButtonImage = styled.img`
    width: 100%;
    height: 50%;
    object-fit: contain;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 50%;
`;

const ButtonTitle = styled.span`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
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
        width: 100%;
    }
`;

const BooksButton = styled(Button)`
    height: 100%;
    img {
        height: 100%;
        width: 100%;
    }
`;

const MoviesButton = styled(Button)`
    height: 100%;
    img {
        height: 100%;
        width: 100%;
    }
`;
export default Homepage;