import express, { json } from "express";
import dotenv from "dotenv";

import connectionToMongo from "./utils/connectionToDb.js";
import animalRoutes from "./routes/animalRoutes.js"
import favouritePlaceRoutes from "./routes/favouritePlaceRoutes.js"

const app = express();
const port = 3000;

dotenv.config();
app.use(json());

app.use('/api/animal', animalRoutes);
app.use('/api/favouriteplace', favouritePlaceRoutes)

app.listen(port, () => {
    connectionToMongo();
    console.log(`Server started at ${port} port`);
});