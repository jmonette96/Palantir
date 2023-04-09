import styled from 'styled-components';
import { useEffect, useState  } from "react"


// character: "5cd99d4bde30eff6ebccfe9e"
// dialog: "Deagol!"
// id: "5cd96e05de30eff6ebcce7e9"
// movie: "5cd95395de30eff6ebccde5d"
// _id: "5cd96e05de30eff6ebcce7e9"

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
    
    console.log(charQuote);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return(
        <>
            <button onClick={handleSwitch}>GO BACK TO MORDORRRRRRRRRRRRRR</button>
            <p>{charQuote.dialog}</p>
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