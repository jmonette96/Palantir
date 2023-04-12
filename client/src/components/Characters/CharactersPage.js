import { useEffect, useState  } from "react"
import { instance } from "../../utils/axios";
import Characters from "./Characters";
import ringLoad from '../../assets/logo/ringSpin.gif'

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
        "Radagast",
        "Éowyn",
        "Gríma Wormtongue",
        "Treebeard",
        "Arwen"
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
        return <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                    <img src={ringLoad}></img>
                    <p style={{color:'white'}}>Loading...</p>
                </div>
    }
    return(
        <>
            <Characters characters={charactersInfo}/>
        </>
    )
}

export default CharactersPage;