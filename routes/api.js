const router = require("express").Router();
const Workout = require("../models/Workout.js");

//Render last workout and adding total duration
router.get("/api/workouts", (req, res) => {
    console.log("route hit");
    Workout.aggregate([
        {$addFields:
            {"totalDuration":
                { $sum: "$exercises.duration" }
            }
        }
    ])

        .then(dbWorkout => {
            console.log("workout", dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log("error", err)
            res.status(400).json(err);
        });
});


//Create workout
router.post("/api/workouts", ({ body }, res) => {
    console.log("route hit");
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
    console.log("route hit");
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


//Get Range for dashboard and adding total duration

router.get("/api/workouts/range", (req, res) => {
    console.log("route hit")
    Workout.aggregate([
        {$addFields:
            {"totalDuration":
                { $sum: "$exercises.duration" }
            }
        }
    ])
        .sort({ _id: -1 }).limit(7)
        .then(dbWorkout => {
            console.log("workout", dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log("error", err)
            res.status(400).json(err);
        });
});


module.exports = router;