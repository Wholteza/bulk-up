import { Day, Modifiers, WorkoutType } from "../types";

const workout: Day = {
  title: "Workout 1",
  secondary: [
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.BenchPress,
          reps: 10,
          link:
            "https://www.muscleandstrength.com/exercises/barbell-bench-press.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.BentOverRowWithBarbell,
          reps: 10,
          link:
            "https://www.muscleandstrength.com/exercises/bent-over-barbell-row.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.BarbellBackSquat,
          reps: 10,
          link: "https://www.muscleandstrength.com/exercises/squat.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.LyingDumbellFrontRaise,
          reps: 10,
          modifiers: [Modifiers.On45DegreeBench, Modifiers.WithDumbells],
          link:
            "https://www.muscleandstrength.com/exercises/dumbbell-front-raise-on-incline-bench.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.SitUp,
          reps: 15,
          bodyWeight: true,
          link: "https://www.muscleandstrength.com/exercises/sit-up.html",
        },
      ],
    },
  ],
};

export default workout;
