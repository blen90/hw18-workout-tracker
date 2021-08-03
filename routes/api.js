const router = require("express").Router();
const Workout = require("../models/workout.js");

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
        })
        .catch(err => {
            res.json(err);
            console.log("error!!!", err)
        });
});

//Add Exercise by ID
router.put("/api/workouts/:id", ({ body }, res) => {
    Workout.create(body) 
    .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
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

router.get("api/workouts/range", ({ body } , res) => {
    Workout.find().limit(10)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch( err => {
        res.json(err);
    })
});


module.exports = router;