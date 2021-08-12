const mongoose = require("mongoose");

const { Schema } = mongoose;

// need property for total duration of exercises called totalDuration

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        // required: "Exercise type required.",
      },
      name: {
        type: String,
        // required: "Exercise name is required.",
      },
      duration: {
        type: Number,
        // required: "Exercise duration is required",
      },
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
