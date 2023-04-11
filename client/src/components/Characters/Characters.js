import styled from 'styled-components';
import { useState } from "react";
import Character from './Character';
import char from '../../assets/character_pictures/char.jpg'

const Characters = (charactersInfo) => {
    const [showCharacter, setShowCharacter] = useState(false)
    const [ character, setCharacter] = useState(-1);
    

    const handleShowCharacter = (character) => {
        setCharacter(character);
        setShowCharacter(true);
    }

    const handleSwitch = () => {
        setShowCharacter(false);
    }


    return (
        <Big>
            <Wrapper>
                <CharImage src={char}></CharImage>
                { !showCharacter ?
                    <CharacterList>
                        {charactersInfo && charactersInfo.characters && charactersInfo.characters.map((character) => (
                            <CharacterListItem key={character._id}>
                            <CharacterName onClick={() => handleShowCharacter(character)}>{character.name}</CharacterName>
                        </CharacterListItem>
                        ))}
                    </CharacterList>
                    :
                    <Character characterData={character} handleSwitch={handleSwitch}/>
                }
            </Wrapper>
        </Big>
    )
}
const CharImage = styled.img`
    border-radius: 25px;
    width: 800px;
    padding: 15px;
`;
const Big = styled.div`
    display: flex;
    justify-content: center;
    background-color: #d0c6b3;
    margin: 5% 15% ; 
    padding: 15px;
    border-radius: 25px;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const CharacterName = styled.p`
    cursor: pointer;
    font-weight: bold;
    margin: 0.5rem 0 0;
    font-size: 1em;
    padding: 2px;
    :hover{
        color: #767a52;
    }
`;
const CharacterList = styled.ol`
    list-style: none;
    padding: 0;
    columns: 2; 
    column-gap: 25rem;
`;
const CharacterListItem = styled.li`
    margin-bottom: 1rem;
`;
export default Characters;