import { useState  } from "react";
import Movie from "./Movie";
import styled from 'styled-components';
import FavouritesButton from "../FavouritesButton";
import { CurrentUserContext } from "../CurrentUserContext";
import {useContext} from 'react';

const Movies = ({movieInfo}) => {
    const {currentUser} = useContext(CurrentUserContext);
    const [showMovie, setShowMovie] = useState(false)
    const [ movie, setMovie] = useState(-1);

    const handleShowMovie = (movie) => {
        setMovie(movie);
        setShowMovie(true);
    }

    const handleSwitch = () => {
        setShowMovie(false);
    }
    
    return (
        <>
            <Wrapper>
                
                { !showMovie ? 
                    movieInfo.map((movie, i) => (
                        <div key={i}>
                            <p>{movie.name}</p>
                            <Image 
                                src={require(`../../assets/movie_pictures/${movie.name}.jpg`)}
                                onClick={() => handleShowMovie(movie)}
                            />
                            {
                                currentUser && (
                                    <FavouritesButton itemId={movie._id} category={"movie"}/>
                                )
                            }
                        </div>

                    ))
                    :
                    <Movie movieData={movie} handleSwitch={handleSwitch}/>
                }
            </Wrapper>
        </>
    )
}

const Image = styled.img`
    cursor: pointer;
`;

const Wrapper = styled.div`

`;

const BooksButton = styled.button`
    cursor: pointer;
    img {
        width: 19.9%;
        height: 25%;
    }
`;


export default Movies;