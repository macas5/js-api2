import birdModel from '../models/birdModel.js'
import dogModel from '../models/dogModel.js'
import catModel from '../models/catModel.js'

export const createAnimal = async (req, res) => {
    try {
        const type = req.params.animalType;
        const newAnimal = type == "bird" ? 
            new birdModel({
                ...req.body
            })
            : type == "dog" ?
            new dogModel({
                ...req.body
            })
            :
            new catModel({
                ...req.body
            });
        await newAnimal.save();
        return res.status(201).send("New animal entry created");
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const getAnimals = async (req, res) => {
    try {
        const allAnimals = {};
        allAnimals.birds = await birdModel.find();
        allAnimals.dogs = await dogModel.find();
        allAnimals.cats = await catModel.find();
        res.status(202).json(allAnimals);
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const getAnimalByCondition = async (req, res) => {
    try {
        const type = req.params.animalType;
        const animal = type == "bird" ? 
            await birdModel.find(req.body)
            : type == "dog" ?
            await dogModel.find(req.body)
            :
            await catModel.find(req.body); 
        res.status(202).json(animal);
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const updateAnimalByCondition = async (req, res) => {
    try {
        const type = req.params.animalType;
        const animal = type == "bird" ? 
            await birdModel.updateOne(req.body[0], {$set: req.body[1]}, {new: true})
            : type == "dog" ?
            await dogModel.updateOne(req.body[0], {$set: req.body[1]}, {new: true})
            :
            await catModel.updateOne(req.body[0], {$set: req.body[1]}, {new: true}); 
        res.status(202).json(animal);
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const deleteAnimalByCondition = async (req, res) => {
    try {
        const type = req.params.animalType;
        type == "bird" ? 
            await birdModel.deleteOne(req.body)
            : type == "dog" ?
            await dogModel.deleteOne(req.body)
            :
            await catModel.deleteOne(req.body); 
        res.status(202).send('Animal was successfuly deleted');
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}