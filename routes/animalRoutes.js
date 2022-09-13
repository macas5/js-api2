import express from 'express';
import { createAnimal, 
    deleteAnimalByCondition, 
    getAnimalByCondition, 
    getAnimals, 
    updateAnimalByCondition } 
    from '../controllers/animalController.js';

const routes = express.Router();

routes.post('/:animalType/create', createAnimal);

routes.get('/get', getAnimals);
routes.get('/:animalType/get', getAnimalByCondition);

routes.put('/:animalType/update', updateAnimalByCondition);

routes.delete('/:animalType/delete', deleteAnimalByCondition)

export default routes;