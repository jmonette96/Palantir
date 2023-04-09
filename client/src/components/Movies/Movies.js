import { useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../utils/axios";
import Movie from "./Movie";
import styled from 'styled-components';

const Movies = ({movieInfo}) => {
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