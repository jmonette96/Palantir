import React, {useState} from "react";
import Book from "./Book";
import styled from 'styled-components';
import FavouritesButton from "../FavouritesButton";
import { CurrentUserContext } from "../CurrentUserContext";
import {useContext} from 'react';

const Books = ({booksData}) => {
    const {currentUser} = useContext(CurrentUserContext);
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
            <ImagesContainer>
                {
                    !viewBook ?
                    booksData.map(({ _id, name }, index) => (
                    <div key={_id}>
                        <h4>{name}</h4>
                        <ImageContainer>
                            <Image src={require(`../../assets/book_pictures/${name}.jpg`)}  onClick={() => handleBookDetailsPage(_id)}/>
                        </ImageContainer>
                        {
                            currentUser && (
                                <FavouritesButton itemId={_id} category={"book"}/>
                            )
                        }
                    </div>
                    ))
                    :
                    <Book bookId={currentBook} handleSwitchBack={handleSwitchBack} />
                }
            </ImagesContainer>
        </>
    );
}

const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ImageContainer = styled.div`
    margin: 10px;
`;

const Image = styled.img`
    width: 200px;
    height: 300px;
    object-fit: contain;
    cursor: pointer;
`;

export default Books;