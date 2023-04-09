import styled from 'styled-components'
import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import Books from './Books';

const BooksPage = () => {
    const [lotrBooks, setLotrBooks] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await instance.get("/book");
            const data = res.data;
            setLotrBooks(data.docs)
            console.log(data.docs);
        };
        fetchData();
    }, []);

    return (
        <>
            <Books booksData={lotrBooks}/>
        </>
    )
}

const Wrapper = styled.div`

`;

export default BooksPage;