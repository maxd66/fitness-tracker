const router = require("express").Router();
const Workout = require("../../models/Workouts");
// Routes needed to make website function properly
//   /api/workouts Post adds workout
//   /api/workouts/:id Put adds exercise
//   /api/workouts/range Get gets workouts in some range I have to define

// Two questions, put request not working, query works in robo

router.get("/workouts", async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]);
    res.json(workouts);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

router.post("/workouts", async (req, res) => {
  try {
    const dbWorkout = await Workout.create(req.body);
    res.json(dbWorkout);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

router.put("/workouts/:id", async (req, res) => {
  try {
    const dbWorkout = await Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    });
    res.json(dbWorkout);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

router.get("/workouts/range", async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]);
    res.json(workouts);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

module.exports = router;
