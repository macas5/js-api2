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
    try {
        const favouritePlace = await favouritePlaceModel.findById(req.params.id);
        res.status(202).json(favouritePlace.animal);
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const updateFavouritePlaceByCondition = async (req, res) => {
    try {
        console.log(req.body[1]);
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