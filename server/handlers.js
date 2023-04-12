"use strict";
const client = require("./utils/client");
const ObjectId = require('mongodb').ObjectId;

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

const getFavouritesByUserId = async (id) => {
    try {
        await client.connect();
        console.log("Connected to MongoDB server");
        
        const database = client.db("Palantir");

        const favourites = database.collection("favourites");

        const result = await favourites.find({userId: id}).toArray();

        return result;
    } catch (err) {
        console.error(err);
        return {data: "Error", status: 500}
    } finally {
        await client.close();
        console.log("Disconnected to MongoDB server");
    }
}

const getFavouritesById = async (id) => {
    try {
        await client.connect();
        console.log("Connected to MongoDB server");
        
        const database = client.db("Palantir");

        const favourites = database.collection("favourites");

        return await favourites.findOne({_id: new ObjectId(id)})

    } catch (err) {
        console.error(err);
        return {data: "Error", status: 500}
    } finally {
        await client.close();
        console.log("Disconnected to MongoDB server");
    }
}

const deleteFavourite = async(userId, favouriteId) => {
    try {
        await client.connect();
        console.log("Connected to MongoDB server");
        
        const database = client.db("Palantir");
        const favourites = database.collection("favourites");
        return await favourites.deleteOne({
            $where: function() {return this.userId == userId && this.favouriteId == favouriteId}
        })
    } catch (err) {
        console.error(err);
        return {data: "Error", status: 500}
    } finally {
        await client.close();
        console.log("Disconnected to MongoDB server");
    }
}

//when we hit the endpoint, we will get the user, the favorite ID and the category 
const addFavourite = async (userId, favouriteId, category) => { 
    try {
        await client.connect();
        console.log("Connected to MongoDB server");
        
        const database = client.db("Palantir");

        const favourites = database.collection("favourites");

        const favourite = { 
            userId,
            favouriteId,
            category
        }

        const result = await favourites.insertOne(favourite);

        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        return result.insertedId;
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
    getFavouritesByUserId,
    getFavouritesById,
    getUserByEmail,
    getUserById,
    deleteFavourite
};