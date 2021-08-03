const router = require("express").Router();
const Workout = require("../models/workout.js");

//Render last workout
router.get("/api/workouts", (req, res) => {

})

//Update by ID
router.put("/api/workouts/:id", ({ body }, res) => {
    db.workout.create(body)
        .then(({ _id }) => db.workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
        .then(dbWorkout => {
            ;
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


module.exports = router;