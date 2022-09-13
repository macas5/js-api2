import birdModel from '../models/birdModel.js';
import catModel from '../models/catModel.js';
import dogModel from '../models/dogModel.js';
import favouritePlaceModel from '../models/favouritePlaceModel.js';
import favPlaceModel from '../models/favouritePlaceModel.js'

export const createFavouritePlace = async (req, res) => {
    try {
        const newFavouritePlace = new favPlaceModel({
                ...req.body
            });
        await newFavouritePlace.save();
        return res.status(201).send("New favourite place entry created");
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const getFavouritePlaces = async (req, res) => {
    try {
        const places = await favouritePlaceModel.find();
        res.status(202).json(places);
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const getFavouritePlacesByCondition = async (req, res) => {
    try {
        const favouritePlace = await favouritePlaceModel.find(req.body)
        res.status(202).json(favouritePlace);
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const getFavouritePlacesAnimals = async (req, res) => {
    const animalModels = {
        ["bird"]: birdModel,
        ["cat"]: catModel,
        ["dog"]: dogModel,
      };
    try {
        const favouritePlace = await favouritePlaceModel.findById(req.params.id);
        const animals = await Promise.all(
            favouritePlace.animal.map(async (animal) => {
                return await animalModels[animal.modelName].findOne({name: animal.name});
           })
        )
        res.status(202).json(animals);
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const updateFavouritePlaceByCondition = async (req, res) => {
    try {
        const favouritePlace = await favouritePlaceModel.updateOne(req.body[0], {$set: req.body[1]});
        res.status(202).json(favouritePlace);
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const deleteFavouritePlaceByCondition = async (req, res) => {
    try {
        await favouritePlaceModel.deleteOne(req.body)
        res.status(202).send('Favourite place was successfuly deleted');
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const getMostPopularPlace = async (req, res) => {
    try {
        const allPlaces = await favouritePlaceModel.find();
        const mostPopular = allPlaces.reduce ((prev, curr) => 
            prev.animal.length > curr.animal.length ? prev : curr)
        res.status(200).json(mostPopular.place);
        
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

