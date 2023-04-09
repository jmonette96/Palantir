"use strict";

const { application } = require("express");
// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

require('dotenv').config();


const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER
};

const {
    addUser,
    getFavouritesByUserId,
    getFavouritesById,
    getUserByEmail,
    getUserById,
    addFavourite,
    deleteFavourite
} = require("./handlers");

const BASE_URL = 'https://the-one-api.dev/v2';
const API_KEY ='vPSokRRlnSGlnD03Eo1W';

express()
    // Below are methods that are included in express(). We chain them for convenience.
    // --------------------------------------------------------------------------------

    // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
    .use(morgan("tiny"))
    .use(express.json())
    .use(auth(config))
    .use(cors())

    // Any requests for static files will go into the public folder
    .use(express.static("public"))

    // --------------------------------- 

    .get('/', async (req, res) => {
        console.log(req.oidc.user);
        console.log(req.oidc.isAuthenticated());


        if (req.oidc.isAuthenticated()) {
            //if we do not have the user in our mongoDB, add them
            let user = await getUserByEmail(req.oidc.user.email);

            if (!user) {
                const userId = await addUser(req.oidc.user);
                user = await getUserById(userId);
            }

            res.redirect(`http://localhost:3000/auth?id=${user._id}`);
        } else {
            res.redirect("http://localhost:3000/");
        }
    })

    .get("/users/favourites/:id", async (req,res) => {
        const id = req.params.id;
        const data = await getFavouritesByUserId(id);

        res.status(data.status).json(data.data);
    })

        
    .get('/profile', requiresAuth(), (req, res) => {
        
        res.send(JSON.stringify(req.oidc.user));
    })

    .get("/users/:id", async (req,res) => {
        const id = req.params.id;
        let data = await getUserById(id);
        //also get the users favourited items
        const usersFavourites = await getFavouritesByUserId(id);
        
        data["favourites"] = usersFavourites;
        res.status(200).json(data);
    })

    .post("/users/favourites", async (req,res) => { 
        const {userId, favouriteId, category} = req.body;
        const objId = await addFavourite(userId, favouriteId, category);
        const favouriteItem = await getFavouritesById(objId)

        res.status(200).json(favouriteItem);
    })

    .delete("/users/favourites", async (req,res) => { 
        const {userId, favouriteId} = req.body;
        await deleteFavourite(userId, favouriteId);

        res.status(200).json("item deleted");
    })



    // ---------------------------------

    // this is our catch all endpoint.
    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })

    // Node spins up our server and sets it to listen on port 8000.
    .listen(8000, () => console.log(`Listening on port 8000`));