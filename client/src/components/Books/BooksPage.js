import styled from 'styled-components'
import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import Books from './Books';

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
        return <div>Loading...</div>;
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