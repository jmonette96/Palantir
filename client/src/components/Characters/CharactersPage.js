import { useEffect, useState  } from "react"
import { instance } from "../../utils/axios";
import styled from 'styled-components'
import Characters from "./Characters";
import ringLoad from '../../assets/logo/ringLoading.gif'

const CharactersPage = () => {
    const [charactersInfo, setCharactersInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const characterNames = [
        "Gandalf",
        "Galadriel",
        "Bilbo Baggins",
        "Frodo Baggins",
        "Samwise Gamgee",
        "Aragorn",
        "Sauron",
        "Elrond",
        "Saruman",
        "Legolas",
        "Gimli",
        "Boromir",
        "Gollum",
        "Peregrin Took",
        "Meriadoc Brandybuck",
        "Tom Bombadil",
        "Théoden",
        "Faramir",
        "Radagast",
        "Éomer",
        "Isildur",
        "Smaug",
        "Radagast",
        "Éowyn",
        "Gríma Wormtongue",
        "Treebeard"
    ]

    useEffect(() => {
        const fetchData = async () => {
            const res = instance.get("/character");
            const data = (await res).data;
            const filteredData = data.docs.filter(
                (character) => characterNames.includes(character.name)
            );
            setCharactersInfo(filteredData);  
            setIsLoading(false);

        };
    
        fetchData();
    }, []);

    if (isLoading) {
        return <img src={ringLoad}></img>;
    }
    return(
        <>
            <Characters characters={charactersInfo}/>
        </>
    )
}

export default CharactersPage;