const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
   
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
                type: Number,

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
            required: "Distance is required",
        }

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;