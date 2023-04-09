import axios from "axios"

const TOKEN = "vPSokRRlnSGlnD03Eo1W";

const headers = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
}


export const instance = axios.create({
    baseURL: "https://the-one-api.dev/v2",
    headers: headers
});

export const API = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});