"use strict";
const client = require("./utils/client");
const ObjectId = require('mongodb').ObjectId;

const categories = [
    "MOVIE",
    "BOOK",
    "CHARACTERS"
];

const addUser = async (user) => {

    try {
        await client.connect();
        console.log("Connected to MongoDB server");
        
        const database = client.db("Palantir");
        const users = database.collection("users");
        const result = await users.insertOne(user);

        console.log(`A document was inserted with the _id: ${result.insertedId}`)

        return result.insertedId;
    } catch (err) {
        console.error(err);
        return ( 500, "Error");
    } finally {
        await client.close();
        console.log("Disconnected to MongoDB server");
    }
};

const getUserByEmail = async (email) => {
    try{
        await client.connect();
        console.log("Connected to MongoDB server");

        const database = client.db("Palantir");
        const users = database.collection("users");

        const result = await users.findOne({email: email});

        return result;
    }catch(err){
        console.error(err);
        return ( 500, "Error");
    }finally{
        await client.close();
        console.log("Disconnected to MongoDB server");
    }
}


const getUserById = async (id) => {
    try{
        await client.connect();
        console.log("Connected to MongoDB server");

        const database = client.db("Palantir");
        const users = database.collection("users");

        const result = await users.findOne({_id: new ObjectId(id)});

        console.log(result)

        return result;
    }catch(err){
        console.error(err);
        return ( 500, "Error");
    }finally {
        await client.close();
        console.log("Disconnected to MongoDB server");
    }
}

const getFavoritesByUserId = async (user) => {
    try {
        await client.connect();
        console.log("Connected to MongoDB server");
        
        const database = client.db("Palantir");

        const favourites = database.collection("favourites");

        const result = await favourites.find({userId: user.sid}).toArray();

        return {data: result, status: 200};
    } catch (err) {
        console.error(err);
        return {data: "Error", status: 500}
    } finally {
        await client.close();
        console.log("Disconnected to MongoDB server");
    }
}

//when we hit the endpoint, we will get the user, the favorite ID and the category 
const addFavourite = async (user, favoriteId, category) => { 
    try {
        await client.connect();
        console.log("Connected to MongoDB server");
        
        const database = client.db("Palantir");

        const favourites = database.collection("favourites");

        const favourite = { 
            userId: user.sid,
            favoriteId: favoriteId,
            category: category
        }

        const result = await favourites.insertOne(favourite);

        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        return {data: result, status: 200};
    } catch (err) {
        console.error(err);
        return {data: "Error", status: 500}
    } finally {
        await client.close();
        console.log("Disconnected to MongoDB server");
    }
}


module.exports = {
    addUser,
    addFavourite,
    getFavoritesByUserId,
    getUserByEmail,
    getUserById
};