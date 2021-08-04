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

//Example exercise 15 -- exercise 14 according to Gary ** lines 31 and down

// app.post("/submit", ({ body }, res) => {
//     db.Note.create(body)
//       .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });



//Get Range

router.get("api/workouts/range", ({ body }, res) => {
    Workout.aggregate({ body })
    .sort({_id: -1}).limit(10)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});


module.exports = router;