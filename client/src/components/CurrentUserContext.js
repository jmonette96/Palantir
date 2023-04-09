import { useState, createContext, useEffect } from 'react';


export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);


    
    return (
        <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
        {children}
        </CurrentUserContext.Provider>
    )
};

export default CurrentUserProvider;
