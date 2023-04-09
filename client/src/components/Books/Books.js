import React, {useState} from "react";
import Book from "./Book";
import styled from 'styled-components';

const Books = ({booksData}) => {
    const [viewBook, setViewBook] = useState(false)
    const [currentBook, setCurrentBook] = useState(-1);

    const handleBookDetailsPage = (bookId) => {
            setCurrentBook(bookId)
            setViewBook(true);
    }

    const handleSwitchBack = () => {
        setViewBook(false)
    }

    return (
        <>
            {
                !viewBook ?
                booksData.map(({ _id, name }, index) => (
                <div key={_id}>
                    <h4>{name}</h4>
                    <Image src={require(`../../assets/book_pictures/${name}.jpg`)} style={{width:"400px", height: "600px"}} onClick={() => handleBookDetailsPage(_id)}/>
                </div>
                ))
                :
                <Book bookId={currentBook} handleSwitchBack={handleSwitchBack} />
            }
        </>
    );
}

const Image = styled.img`
cursor: pointer;
`;


export default Books;