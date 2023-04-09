import { useEffect, useState  } from "react"
import styled from 'styled-components'


const Movie = ({movieData, handleSwitch}) => {



    return(
        <>
            <button onClick={handleSwitch}>GO BACK TO MORDORRRRRRRRRRRRRR</button>
            <Wrapper>
                <h1>{movieData.name}</h1>
                <p>Academy Award Nominations: {movieData.academyAwardNominations} </p>
                <p>Academy Award Wins: {movieData.academyAwardWins}</p>
                <p>Budget: ${movieData.budgetInMillions} million</p>
                <p>Box Office Revenue: ${movieData.boxOfficeRevenueInMillions} million</p>
                <p>Rotten Tomatoes Score: {movieData.rottenTomatoesScore}%</p>
                <p>runtime: {movieData.runtimeInMinutes}</p>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`

`;

export default Movie;