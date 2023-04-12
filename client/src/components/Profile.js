import { useEffect } from "react";
import {CurrentUserContext} from "./CurrentUserContext";
import { instance } from "../utils/axios";
import { useState, useContext } from "react";
import Books from "../components/Books/Books";
import Movies from "../components/Movies/Movies";
import styled from 'styled-components';

const Profile = () =>{
    const {currentUser} = useContext(CurrentUserContext);
    const [favouriteBooks, setFavouriteBooks] = useState([]);
    const [favouriteMovies, setfavouriteMovies] = useState([]);

    useEffect(() => {

        const fetchFavorites = async () => {
            let tempBooks = [];
            let tempMovies = [];

            for(const favourite of currentUser.favourites){
                switch(favourite.category){
                    case "book":
                        let book = await fetchBook(favourite.favouriteId);
                        tempBooks.push(book);
                        break;
                    case "movie":
                        let movie = await fetchMovie(favourite.favouriteId);
                        tempMovies.push(movie);
                        break;
                }
            }
            setFavouriteBooks(tempBooks);
            setfavouriteMovies(tempMovies);
        }

        fetchFavorites();

    }, [])

    const fetchBook = async (bookId) => {
        const res = await instance.get(`/book/${bookId}`);
        return res.data.docs[0];
    }

    const fetchMovie = async (movieId) => {
        const res = await instance.get(`/movie/${movieId}`);
        return res.data.docs[0];
    }

    return (
        <Wrapper>
            <img src={currentUser.picture}></img>
            <Name>{currentUser.name}</Name>
            <Title>Favourite Books</Title>
            <hr></hr>
            {favouriteBooks.length === 0 ? 
                <NoFavourites>No Favourites</NoFavourites>
                :
                <Books booksData={favouriteBooks}/>
            }
            <Title>Favourite Movies</Title>
            <hr></hr>
            {favouriteMovies.length == 0 ?
                <NoFavourites>No Favourites</NoFavourites>    
                :
                <Movies movieInfo={favouriteMovies}/>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 25px;
`;
const Name = styled.p`
    color: white;
`;

const Title = styled.h2`
    color: white;
`;
const NoFavourites = styled.p`
    color: white;
`;


export default Profile;