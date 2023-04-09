import { useState, createContext } from 'react';


export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        !localStorage.getItem("user") ?
        null :
        JSON.parse(localStorage.getItem("user"))
    );


    
    return (
        <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
        {children}
        </CurrentUserContext.Provider>
    )
};

export default CurrentUserProvider;
