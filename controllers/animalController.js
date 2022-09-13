import birdModel from '../models/birdModel.js'
import dogModel from '../models/dogModel.js'
import catModel from '../models/catModel.js'

const animalModels = {
    ["bird"]: birdModel,
    ["dog"]: dogModel,
    ["cat"]: catModel            
}

export const createAnimal = async (req, res) => {
    try {
        const newAnimal = new animalModels[req.params.animalType]({
                ...req.body
            })
        await newAnimal.save();
        return res.status(201).send(`New ${req.params.animalType} entry created`);
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
        const animal = await animalModels[req.params.animalType].find(req.body)
        res.status(202).json(animal);
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const updateAnimalByCondition = async (req, res) => {
    try {
        const animal = await animalModels[req.params.animalType]
        .updateOne(req.body[0], {$set: req.body[1]});
        res.status(202).json(animal);
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}

export const deleteAnimalByCondition = async (req, res) => {
    try {
       await animalModels[req.params.animalType].deleteOne(req.body)
        res.status(202).send('Animal was successfuly deleted');
    } catch (error) {
        console.error(error);
        res.status(405).send(error);
    }
}