import styled from 'styled-components';


const Character = ({characterData, handleSwitch}) => {




    return(
        <>
            <button onClick={handleSwitch}>GO BACK TO MORDORRRRRRRRRRRRRR</button>
            <Wrapper>
                <h1>{characterData.name}</h1>
                <p>Born: {characterData.birth}</p>
                <p>Death: {characterData.death}</p>
                <p>Gender: {characterData.gender}</p>
                <p>Hair: {characterData.hair}</p>
                <p>Height: {characterData.height}</p>
                <p>Realm: {characterData.realm ? characterData.realm : "Unknown"}</p>
                <p>Spouse: {characterData.spouse ? characterData.spouse : "Unknown"}</p>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`

`;

export default Character;