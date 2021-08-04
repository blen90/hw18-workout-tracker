const router = require("express").Router();
const Workout = require("../models/Workout.js");



//Render last workout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);


        });
});


//Create workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(dbWorkout);
        })
        .catch(err => {
            res.json(err);
            console.log("error!!!", err)
        });
});

//Add Exercise by ID
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findOneAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
            console.log("Try again!", err)
        });
});


//Get Range

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([{$addFields: {'totalDuration': {$sum: '$exercises.duration' }}}])
        .sort({ _id: -1}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log('error', err)
            res.status(400).json(err);
        });
});


module.exports = router;