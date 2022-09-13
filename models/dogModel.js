import mongoose from "mongoose";

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    isAggressive: {
        type: Boolean
    },
    isSocialDog: {
        type: Boolean
    },
    canFly: {
        type: Boolean,
        default: false
    },
    favouriteToys: {
        type: [String]
    },
    isBoss: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Dog', dogSchema);