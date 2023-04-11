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
        <Big>
            <ImagesContainer>
                {
                    !viewBook ?
                    booksData.map(({ _id, name }) => (
                    <div key={_id}>
                        <ImageContainer>
                            <p>{name}</p>
                            <Image src={require(`../../assets/book_pictures/${name}.jpg`)}  onClick={() => handleBookDetailsPage(_id)}/>
                        </ImageContainer>
                        {
                            currentUser && (
                                    <FavouritesButton itemId={_id} category={"book"} style={{marginTop: "auto"}}/>
                            )
                        }
                    </div>
                    ))
                    :
                    <Book bookId={currentBook} handleSwitchBack={handleSwitchBack}/>
                }
            </ImagesContainer>
        </Big>
    );
}
const Big = styled.div`
    display: flex;
    justify-content: center;
    background-color: #d0c6b3;
    margin: 10% 15% ; 
    padding: 15px;
    border-radius: 25px;
`;
const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 85%;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 400px;
    margin: 10px;
`;

const Image = styled.img`
    width: 200px;
    height: 300px;
    object-fit: contain;
    cursor: pointer;
`;

export default Books;