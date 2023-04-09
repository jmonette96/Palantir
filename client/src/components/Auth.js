import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useEffect } from "react";
import {CurrentUserContext} from "./CurrentUserContext";
import {useContext} from 'react';
import { API } from "../utils/axios";

const Auth = () =>{
    const [searchParams, _] = useSearchParams();
    const navigate = useNavigate();
    const  {setCurrentUser}  = useContext(CurrentUserContext);
    
    useEffect(() => {

        const setUserData = async () => {
            const id = searchParams.get("id")
            const data = await API.get(`/users/${id}`);

            localStorage.setItem("user", JSON.stringify(data.data));
            setCurrentUser(data.data);

            navigate("/");
        }

        setUserData();
    }, []);

    return (
        <></>
    )
}

export default Auth;