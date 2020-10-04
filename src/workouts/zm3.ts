import { Day, Modifiers, WorkoutType } from "../types";

const workout: Day = {
  title: "3",
  secondary: [
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.BicepCurl,
          reps: 10,
          modifiers: [Modifiers.WithBarbell, Modifiers.Standing],
          link:
            "https://www.muscleandstrength.com/exercises/close-grip-standing-barbell-curl.html",
        },
        {
          type: WorkoutType.BicepCurl,
          reps: 10,
          modifiers: [
            Modifiers.WithBarbell,
            Modifiers.Standing,
            Modifiers.LeaningForward,
          ],
          link:
            "https://www.muscleandstrength.com/exercises/close-grip-standing-barbell-curl.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.ConcentrationCurl,
          reps: 10,
          modifiers: [
            Modifiers.WithDumbells,
            Modifiers.Sitting,
            Modifiers.AlternatingHands,
            Modifiers.WithRotation,
          ],
          link:
            "https://www.muscleandstrength.com/exercises/concentration-cur.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.BicepCurl,
          reps: 10,
          modifiers: [
            Modifiers.WithDumbells,
            Modifiers.Sitting,
            Modifiers.ElbowAgainstLeg,
            Modifiers.OneArmAtATime,
          ],
          link:
            "https://www.muscleandstrength.com/exercises/alternate-seated-hammer-curl.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.TricepExtension,
          reps: 10,
          modifiers: [
            Modifiers.WithDumbells,
            Modifiers.BehindHead,
            Modifiers.LyingDown,
            Modifiers.OnBench,
          ],
          link:
            "https://www.muscleandstrength.com/exercises/lying-pronated-dumbbell-tricep-extension",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.ShoulderPress,
          reps: 10,
          modifiers: [
            Modifiers.WithDumbells,
            Modifiers.Sitting,
            Modifiers.OnBench,
          ],
          link:
            "https://www.muscleandstrength.com/exercises/seated-dumbbell-press.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.Shrugs,
          reps: 12,
          modifiers: [Modifiers.WithKettleBells, Modifiers.Standing],
          link:
            "https://www.muscleandstrength.com/exercises/dumbbell-shrugs.html",
        },
      ],
    },
    {
      sets: 3,
      workouts: [
        {
          type: WorkoutType.Lunges,
          reps: 16,
          modifiers: [Modifiers.Walking, Modifiers.WithKettleBells],
          link:
            "https://www.muscleandstrength.com/exercises/dumbbell-walking-lunge.html",
        },
      ],
    },
  ],
};

export default workout;
