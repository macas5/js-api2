import mongoose from "mongoose";

const connectionToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, () => {
            console.log('Connection to DB is successful');
        });
    } catch (error) {
        console.error(error);
    }
}

export default connectionToMongo;