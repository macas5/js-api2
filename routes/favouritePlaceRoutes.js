import express from 'express';
import { createFavouritePlace, 
    deleteFavouritePlaceByCondition, 
    getFavouritePlaces, 
    getFavouritePlacesAnimals, 
    getFavouritePlacesByCondition, 
    updateFavouritePlaceByCondition } 
    from '../controllers/favouritePlaceController.js';

const routes = express.Router();

routes.post('/create', createFavouritePlace);

routes.get('/get', getFavouritePlaces);
routes.get('/find', getFavouritePlacesByCondition);
routes.get('/getAnimals/:id', getFavouritePlacesAnimals);

routes.put('/update', updateFavouritePlaceByCondition);

routes.delete('/delete', deleteFavouritePlaceByCondition);

export default routes;