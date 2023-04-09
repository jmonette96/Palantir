import movies from '../assets/movie_pictures/movies.jpg';
import books from '../assets/book_pictures/books.jpg'
import frodo from '../assets/character_pictures/frodo.jpg';
import styled from "styled-components";
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { API } from '../utils/axios';

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <BooksButton onClick={ev => navigate(`/books`)}>
                <img alt="books" src={books}></img>
            </BooksButton>
            <MoviesButton onClick={ev => navigate(`/movies`)}>
                <img alt="books" src={movies}></img>
            </MoviesButton>
            <CharactersButton onClick={ev => navigate(`/characters`)}>
                <img alt="books" src={frodo}></img>
            </CharactersButton>
        </div>
        
    )
}

const CharactersButton = styled.button`
    cursor: pointer;
    img {
        height: 100%;
        width: 100%;
    }
`;

const BooksButton = styled.button`
    cursor: pointer;
    img {
        height: 100%;
        width: 100%;
    }
`;
const MoviesButton = styled.button`
    img {
        height: 100%;
        width: 100%;
    }
`;
export default Homepage;