import {CurrentUserContext} from "./CurrentUserContext";
import {useContext} from 'react';
import { API } from "../utils/axios";
import { useEffect, useState } from "react";

const FavouritesButton = ({itemId,category}) => {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
    const [isFavourite, setIsFavourite] = useState(false)

    // check if the item is already favourited
    useEffect(() => {
        let exists = currentUser.favourites.some((x) => x.favouriteId === itemId && x.userId === currentUser._id);
        setIsFavourite(exists)
    }, [])
    
    
    const addToFavourites = async () => {
        const data = await API.post("/users/favourites", {
            userId: currentUser._id,
            favouriteId: itemId,
            category: category
        });

        let tempUser = currentUser;
        tempUser.favourites = [...tempUser.favourites, data.data];
        setCurrentUser(tempUser);
        localStorage.setItem("user", JSON.stringify(tempUser));
        setIsFavourite(true);
    }

    const removeFromFavourites = async () => {
        await API.delete("/users/favourites", {
            userId: currentUser._id,
            favouriteId: itemId,
        });

        let tempUser = currentUser;
        tempUser.favourites = tempUser.favourites.filter((x) => x.favouriteId !== itemId && x.userId !== currentUser._id)
        setCurrentUser(tempUser);
        localStorage.setItem("user", JSON.stringify(tempUser));
        setIsFavourite(false);
    }

    return (
        <>
            {
                isFavourite ? 
                <button onClick={removeFromFavourites}>Remove from Favorites</button>
                :
                <button onClick={addToFavourites}>Add to favorites!</button>
            }
        </>
    )
}

export default FavouritesButton;