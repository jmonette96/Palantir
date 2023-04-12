import styled from 'styled-components'
import moviesImage from '../../assets/movie_pictures/movies.png'

const Movie = ({movieData, handleSwitch}) => {

    return(
        <>
            <BackButton onClick={handleSwitch}>Back to Rivendell</BackButton>
            <MovieImageDiv>
                <MovieImage src={moviesImage}></MovieImage>
            </MovieImageDiv>
            <div>
                <h1>{movieData.name}</h1>
                <p>Academy Award Nominations: {movieData.academyAwardNominations} </p>
                <p>Academy Award Wins: {movieData.academyAwardWins}</p>
                <p>Budget: ${movieData.budgetInMillions} million</p>
                <p>Box Office Revenue: ${movieData.boxOfficeRevenueInMillions} million</p>
                <p>Rotten Tomatoes Score: {movieData.rottenTomatoesScore}%</p>
                <p>runtime: {movieData.runtimeInMinutes}</p>
            </div>
        </>
    )
}

const Wrapper = styled.div`
`;
const MovieImageDiv = styled.div`
    position: absolute;
    top: 500px;
`;
const MovieImage = styled.img`
    width: 35%;
    height: 50%;
    margin-top: 70px;
    /* border-radius: 25px; */
`;
const BackButton = styled.button`
    cursor: pointer;
    margin-top: 45px;
    height: 6%;
    width: 10%;
    font-size: 15px;
    background-color: #767a52;
    color: white;
    :hover{
        background-color: #5c1014;
    }
    z-index: 99;
`;
export default Movie;