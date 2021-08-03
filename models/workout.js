const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Name is required"

            },
            type: {
                type: String,
                trim: true,
                required: "Type is required"

            },
            duration: {
                type: String,

            },

            weight: {
                type: Number,
                required: "Weight is required", 

            sets: {
                type: Number,
                required: "Sets are required",

            },
            reps: {
                type: Number,
                required: "Reps are required",

            }
        },

        distance: {
            type: Number,
        }

    }
]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;