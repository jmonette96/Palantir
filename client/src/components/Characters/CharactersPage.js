import { useEffect, useState  } from "react"
import { instance } from "../../utils/axios";
import styled from 'styled-components'
import Characters from "./Characters";


const CharactersPage = () => {
    const [charactersInfo, setCharactersInfo] = useState([]);

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
        "Pippin Took",
        "Merry Brandybuck",
        "Tom Bombadil",
        "Théoden",
        "Faramir",
        "Radagast",
        "Éomer",
        "Isildur",
        "Smaug",
        "Radagast",
        "Éowyn",
        "Gríma Wormtongue"
    ]

    useEffect(() => {
        const fetchData = async () => {
            const res = instance.get("/character");
            const data = (await res).data;
            const filteredData = data.docs.filter(
                (character) => characterNames.includes(character.name)
            );
            setCharactersInfo(filteredData);  

        };
    
        fetchData();
    }, []);


    return(
        <>
            <Characters characters={charactersInfo}/>
        </>
    )
}

export default CharactersPage;