import { WorkoutType, Modifiers, Day } from "../types";

const workout: Day = {
  title: "Workout 2",
  secondary: [
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.Deadlift,
          reps: 10,
          link: "https://www.muscleandstrength.com/exercises/deadlifts.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.BenchPress,
          reps: 10,
          modifiers: [Modifiers.On45DegreeBench],
          link:
            "https://www.muscleandstrength.com/exercises/incline-bench-press.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.CalfRaise,
          reps: 20,
          modifiers: [Modifiers.WithBarbellOnShoulders],
          link:
            "https://www.muscleandstrength.com/exercises/standing-calf-raise.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.BackExtension,
          reps: 15,
          modifiers: [Modifiers.OnGHD],
          link:
            "https://www.muscleandstrength.com/exercises/ghd-back-extension",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.LaterialRaise,
          reps: 10,
          modifiers: [Modifiers.WithDumbells],
          link:
            "https://www.muscleandstrength.com/exercises/dumbbell-lateral-raise.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.PullUps,
          reps: 10,
          bodyWeight: true,
          modifiers: [Modifiers.AsManyAsYouCanDo, Modifiers.OptionalRubberBand],
          link: "https://www.muscleandstrength.com/exercises/pull-up",
        },
      ],
    },
  ],
};

export default workout;
