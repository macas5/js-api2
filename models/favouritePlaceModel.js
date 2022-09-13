import mongoose from "mongoose";

const favouritePlaceSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true
    },
    isIndoor: {
        type: Boolean,
        required: true
    },
    temperature: {
        type: Number,
        min: -25,
        max: 45,
        required: true
    },
    photo: {
        type: String,
    },
    favouriteRating: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    animal: {
        type: [{ modelName: String, name: String }],
        default: []
    }
});

export default mongoose.model('favouritePlace', favouritePlaceSchema);