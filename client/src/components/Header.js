import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

/*
    _id:6431f381510e39066da9b241
    given_name: "Jason"
    family_name: "Monette"
    nickname: "jmonette07"
    name: "Jason Monette"
    picture: "https://lh3.googleusercontent.com/a/AGNmyxYTSN8GvHpFviEAAwcUa_jZCoEoUg…"
    locale: "en"
    updated_at: "2023-04-08T23:06:39.142Z"
    email: "jmonette07@gmail.com"
    email_verified: true
    sub: "google-oauth2|115606100653114590770"
    sid: "P_ZEHg57C-5NwaG2HhoZUe27Z0lzcqX2"
*/

// useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//         fetch(`http://localhost:8000/user/${userId}`)
//             .then(res => res.json())
//             .then(data => {
//                 if (data.error) {
//                     localStorage.removeItem("userId");
//                     window.location.href = "http://localhost:8000/login";
//                 }
//             })
//     }
// }, [])

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userId");
        window.location.href = "http://localhost:8000/logout";
    }

    return (
        <Wrapper>
            <Name onClick={ev => navigate(`/`)}>
                Palantir
            </Name>
            {
                !localStorage.getItem("userId") && (
                    <button><Link to={"http://localhost:8000/login"}>Log In</Link></button>
                )
            }

            <button onClick={() => handleLogout()}>Log Out</button>
        </Wrapper>
    )
}

const Name = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: large;
    font-weight: bold;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px ;
    border-radius: 1px;
    border-color: black;
    border-style: double;
`;


export default Header;