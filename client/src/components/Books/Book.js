import styled from 'styled-components';
import { useEffect, useState } from "react";
import { instance } from '../../utils/axios';
import fellow from '../../assets/book_pictures/books.jpg'
import ringLoad from '../../assets/logo/ringSpin.gif'

const Book = ({bookId, handleSwitchBack}) => {
    const [chapters,setChapters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await instance.get(`/book/${bookId}/chapter`)
            const bookData = res.data;
            setChapters(bookData.docs);
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
            <BackButton onClick={handleSwitchBack}>Back to the Shire</BackButton>
            <BookImageDiv>
                <BookImage src={fellow }></BookImage>
            </BookImageDiv>
            <ChaptersDiv>
                <h1>Chapters</h1>
                {chapters.length > 0 && 
                    <ol>
                        {chapters.map((chapter) => (
                            <li key={chapter._id}>
                                {chapter.chapterName}
                            </li> 
                        ))}
                    </ol>            
                }
            </ChaptersDiv>
        </>
    )
}
const BookImageDiv = styled.div`
    position: absolute;
    top: 500px;
`;
const ChaptersDiv = styled.div`
    display: flex;
    flex-direction: column;
`; 
const BookImage = styled.img`
    width: 80%;
    height: 50%;
    margin-top: 200px;
`;
const BackButton = styled.button`
    cursor: pointer;
    margin-top: 45px;
    height: 5%;
    background-color: #767a52;
    color: white;
    :hover{
        background-color: #5c1014;
    }
    z-index: 99;
`;

export default Book;