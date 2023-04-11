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
        <Big>
            <ImagesContainer>
                
                { !showMovie ? 
                    movieInfo.map((movie, i) => (
                        <div key={i}>
                            <p>{movie.name}</p>
                            <ImageContainer>
                                <Image 
                                    src={require(`../../assets/movie_pictures/${movie.name}.jpg`)}
                                    onClick={() => handleShowMovie(movie)}
                                />
                            </ImageContainer>
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
            </ImagesContainer>
        </Big>
    )
}

const Big = styled.div`
    display: flex;
    justify-content: center;
    background-color: #d0c6b3;
    margin: 10% 15% ; 
    padding: 15px;
    border-radius: 25px;
`;
const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 85%;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 400px;
    margin: 10px;
`;

const Image = styled.img`
    width: 200px;
    height: 350px;
    object-fit: contain;
    cursor: pointer;
`;

export default Movies;