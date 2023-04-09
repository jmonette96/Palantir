import styled from 'styled-components';
import { useEffect, useState } from "react";
import { instance } from '../../utils/axios';


const Book = ({bookId, handleSwitchBack}) => {
    const [chapters,setChapters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await instance.get(`/book/${bookId}/chapter`)
            const bookData = res.data;

            console.log("bookdata",bookData)
            setChapters(bookData.docs);
        };

        fetchData();
    }, []);

    return(
        <>
            <button onClick={handleSwitchBack}>Go back</button>
            <h3>Chapters</h3>
            {chapters.length > 0 && 
                <ul>
                    {chapters.map((chapter) => (
                        <li key={chapter._id}>
                            {chapter.chapterName}
                        </li> 
                    ))}
                </ul>            
            }
        </>
    )
}

export default Book;