import { Day, Modifiers, WorkoutType } from "../types";

const workout: Day = {
  title: "4",
  secondary: [
    {
      sets: 5,
      workouts: [
        {
          reps: 10,
          type: WorkoutType.PullUps,
          bodyWeight: true,
          modifiers: [Modifiers.OptionalRubberBand],
          link: "https://www.muscleandstrength.com/exercises/pull-up",
        },
        {
          reps: 10,
          type: WorkoutType.LegRaises,
          bodyWeight: true,
          link:
            "https://www.muscleandstrength.com/exercises/lying-floor-leg-raise.html",
        },
      ],
    },
    {
      sets: 4,
      workouts: [
        {
          reps: 8,
          type: WorkoutType.TBarRow,
          modifiers: [Modifiers.OptionalUseCableMachineGrip],
          link:
            "https://www.muscleandstrength.com/exercises/bent-over-row.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          reps: 8,
          type: WorkoutType.BackExtension,
          modifiers: [Modifiers.WithKettleBells],
          link:
            "https://www.muscleandstrength.com/exercises/ghd-back-extension",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          reps: 20,
          type: WorkoutType.CleanAndPress,
          modifiers: [Modifiers.WithBarbell],
          link: "https://www.muscleandstrength.com/exercises/clean-press.html",
        },
      ],
    },
  ],
};

export default workout;
