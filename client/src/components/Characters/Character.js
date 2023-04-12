import styled from 'styled-components';
import { useEffect, useState  } from "react"
import ringLoad from '../../assets/logo/ringSpin.gif'

const Character = ({characterData, handleSwitch}) => {
    const [charQuote, setCharQuote] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer vPSokRRlnSGlnD03Eo1W'
            };
    
            const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
            headers: headers
            });
    
            const quotes = await rawQuotes.json();
    
            // Filter quotes by character ID
            const filteredQuotes = quotes.docs.filter(quote => quote.character === characterData._id);
    
            // Select a random quote from the filtered quotes
            const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    
            setCharQuote(randomQuote);
            setIsLoading(false);
        };
    
        fetchData();
    }, []);

    if (isLoading) {
        return <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                    <img src={ringLoad}></img>
                    <p style={{color:'white'}}>Loading...</p>
                </div>
    }
    return(
        <>
            <BackButton onClick={handleSwitch}>Back to Mordor</BackButton>
            {!charQuote || !charQuote.dialog ? <p>No quotes available</p> : <Quote>"{charQuote.dialog}"</Quote>}
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
const BackButton = styled.button`
    cursor: pointer;
    font-size: 0.7em;
    background-color: #767a52;
    color: white;
    :hover{
        background-color: #5c1014;
    }
`;
const Quote = styled.p`
    font-style: italic;
    max-width: 60%;
`;

const Wrapper = styled.div`
`;

export default Character;