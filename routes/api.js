const router = require("express").Router();
const Workout = require("./models/user");
// Routes needed to make website function properly
//   /api/workouts Post adds workout
//   /api/workouts/:id Put adds exercise
//   /api/workouts/range Get gets workouts in some range I have to define

router.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

router.post("/api/workouts", async (req, res) => {
  try {
    const { body } = req;
    const dbWorkout = await Workout.create(body);
    res.json(dbWorkout);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});
