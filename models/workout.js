const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        // {
        //     type: Schema.Types.ObjectId, //References the Exercise model
        //     ref: "Exercise"
        // }
        {
        type: {
            type: String,
            trim: true,
            required: "Type is required"

        },
        name: {
            type: String,
            trim: true,
            required: "Name is required"

        },

        duration: {
            type: Number,
            required: "duration is required"

        },

        weight: {
            type: Number
        },

        sets: {
            type: Number
        },

        reps: {
            type: Number
        },

        distance: {
            type: Number
        }
    }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;