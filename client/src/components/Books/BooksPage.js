import styled from 'styled-components'
import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import Books from './Books';
import ringLoad from '../../assets/logo/ringSpin.gif'

const BooksPage = () => {
    const [lotrBooks, setLotrBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await instance.get("/book");
            const data = res.data;
            setLotrBooks(data.docs)
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
    return (
        <>
            <Books booksData={lotrBooks}/>
        </>
    )
}

const Wrapper = styled.div`

`;

export default BooksPage;