import styled from 'styled-components';
import { useState } from "react";
import Character from './Character';

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
        <Wrapper>
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
    )
}

const Wrapper = styled.div`
`;
const CharacterName = styled.h2`
    cursor: pointer;
`;
const CharacterList = styled.ol`
list-style: none;
padding: 0;
`;
const CharacterListItem = styled.li`
margin-bottom: 1rem;
h2 {
    margin: 0;
    font-size: 1.25rem;
}
p {
    margin: 0.5rem 0 0;
    font-size: 0.875rem;
}
`;
export default Characters;