import { Day, WorkoutType, Modifiers } from "./types";

export const days: Day[] = [
  {
    title: "#1",
    main: [
      {
        sets: 6,
        time: undefined,
        workouts: [
          {
            type: WorkoutType.Backsquat,
            reps: 3,
            repetitionMaximum: true,
            modifiers: [Modifiers.HandOnDumbells],
          },
        ],
      },
    ],
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.FarmersCarry,
            distance: 200,
            reps: 1,
          },
          {
            type: WorkoutType.DeficitPushUp,
            reps: 20,
            bodyWeight: true,
            modifiers: [Modifiers.HandOnDumbells],
          },
          {
            type: WorkoutType.PushJerks,
            reps: 10,
          },
        ],
      },
    ],
  },
  {
    title: "#2",
    main: undefined,
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.Deadlift,
            reps: 1,
          },
          {
            type: WorkoutType.SquatClean,
            reps: 3,
          },
          {
            type: WorkoutType.PushJerks,
            reps: 5,
          },
          {
            type: WorkoutType.MuscleUp,
            reps: 3,
          },
          {
            type: WorkoutType.RopeClimb,
            reps: 1,
          },
        ],
      },
    ],
  },
  // {
  //   title: "#2",
  //   main: null,
  //   secondary:
  //     "Lee\r\n\r\n5 rounds for time of:\r\n1 Deadlift 155/100\r\n3 Squat clean 85/55\r\n5 Push jerk 85/55\r\n3 Muscle-ups\r\n1 Rope climb",
  // },
  {
    title: "#3",
    main: undefined,
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.Deadlift,
            reps: 12,
          },
          {
            type: WorkoutType.HangPowerClean,
            reps: 9,
          },
          {
            type: WorkoutType.PushJerks,
            reps: 6,
          },
        ],
      },
    ],
  },
  // {
  //   title: "#3",
  //   main: null,
  //   secondary:
  //     '"DT" \r\n5 rounds:\r\n12 Deadlift\r\n9 Hang power clean\r\n6 Push jerk \r\nWeight: 70/47,5kg\r\n',
  // },
  {
    title: "#1",
    main: [
      {
        sets: 6,
        time: undefined,
        workouts: [
          {
            type: WorkoutType.Backsquat,
            reps: 3,
            repetitionMaximum: true,
            modifiers: [Modifiers.HandOnDumbells],
          },
        ],
      },
    ],
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.FarmersCarry,
            distance: 200,
            reps: 1,
          },
          {
            type: WorkoutType.DeficitPushUp,
            reps: 20,
            bodyWeight: true,
            modifiers: [Modifiers.HandOnDumbells],
          },
          {
            type: WorkoutType.PushJerks,
            reps: 10,
          },
        ],
      },
    ],
  },
  {
    title: "#2",
    main: undefined,
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.Deadlift,
            reps: 1,
          },
          {
            type: WorkoutType.SquatClean,
            reps: 3,
          },
          {
            type: WorkoutType.PushJerks,
            reps: 5,
          },
          {
            type: WorkoutType.MuscleUp,
            reps: 3,
          },
          {
            type: WorkoutType.RopeClimb,
            reps: 1,
          },
        ],
      },
    ],
  },
  // {
  //   title: "#2",
  //   main: null,
  //   secondary:
  //     "Lee\r\n\r\n5 rounds for time of:\r\n1 Deadlift 155/100\r\n3 Squat clean 85/55\r\n5 Push jerk 85/55\r\n3 Muscle-ups\r\n1 Rope climb",
  // },
  {
    title: "#3",
    main: undefined,
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.Deadlift,
            reps: 12,
          },
          {
            type: WorkoutType.HangPowerClean,
            reps: 9,
          },
          {
            type: WorkoutType.PushJerks,
            reps: 6,
          },
        ],
      },
    ],
  },
  // {
  //   title: "#3",
  //   main: null,
  //   secondary:
  //     '"DT" \r\n5 rounds:\r\n12 Deadlift\r\n9 Hang power clean\r\n6 Push jerk \r\nWeight: 70/47,5kg\r\n',
  // },
  {
    title: "#1",
    main: [
      {
        sets: 6,
        time: undefined,
        workouts: [
          {
            type: WorkoutType.Backsquat,
            reps: 3,
            repetitionMaximum: true,
            modifiers: [Modifiers.HandOnDumbells],
          },
        ],
      },
    ],
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.FarmersCarry,
            distance: 200,
            reps: 1,
          },
          {
            type: WorkoutType.DeficitPushUp,
            reps: 20,
            bodyWeight: true,
            modifiers: [Modifiers.HandOnDumbells],
          },
          {
            type: WorkoutType.PushJerks,
            reps: 10,
          },
        ],
      },
    ],
  },
  {
    title: "#2",
    main: undefined,
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.Deadlift,
            reps: 1,
          },
          {
            type: WorkoutType.SquatClean,
            reps: 3,
          },
          {
            type: WorkoutType.PushJerks,
            reps: 5,
          },
          {
            type: WorkoutType.MuscleUp,
            reps: 3,
          },
          {
            type: WorkoutType.RopeClimb,
            reps: 1,
          },
        ],
      },
    ],
  },
  // {
  //   title: "#2",
  //   main: null,
  //   secondary:
  //     "Lee\r\n\r\n5 rounds for time of:\r\n1 Deadlift 155/100\r\n3 Squat clean 85/55\r\n5 Push jerk 85/55\r\n3 Muscle-ups\r\n1 Rope climb",
  // },
  {
    title: "#3",
    main: undefined,
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.Deadlift,
            reps: 12,
          },
          {
            type: WorkoutType.HangPowerClean,
            reps: 9,
          },
          {
            type: WorkoutType.PushJerks,
            reps: 6,
          },
        ],
      },
    ],
  },
  // {
  //   title: "#3",
  //   main: null,
  //   secondary:
  //     '"DT" \r\n5 rounds:\r\n12 Deadlift\r\n9 Hang power clean\r\n6 Push jerk \r\nWeight: 70/47,5kg\r\n',
  // },
  {
    title: "#1",
    main: [
      {
        sets: 6,
        time: undefined,
        workouts: [
          {
            type: WorkoutType.Backsquat,
            reps: 3,
            repetitionMaximum: true,
            modifiers: [Modifiers.HandOnDumbells],
          },
        ],
      },
    ],
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.FarmersCarry,
            distance: 200,
            reps: 1,
          },
          {
            type: WorkoutType.DeficitPushUp,
            reps: 20,
            bodyWeight: true,
            modifiers: [Modifiers.HandOnDumbells],
          },
          {
            type: WorkoutType.PushJerks,
            reps: 10,
          },
        ],
      },
    ],
  },
  {
    title: "#2",
    main: undefined,
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.Deadlift,
            reps: 1,
          },
          {
            type: WorkoutType.SquatClean,
            reps: 3,
          },
          {
            type: WorkoutType.PushJerks,
            reps: 5,
          },
          {
            type: WorkoutType.MuscleUp,
            reps: 3,
          },
          {
            type: WorkoutType.RopeClimb,
            reps: 1,
          },
        ],
      },
    ],
  },
  // {
  //   title: "#2",
  //   main: null,
  //   secondary:
  //     "Lee\r\n\r\n5 rounds for time of:\r\n1 Deadlift 155/100\r\n3 Squat clean 85/55\r\n5 Push jerk 85/55\r\n3 Muscle-ups\r\n1 Rope climb",
  // },
  {
    title: "#3",
    main: undefined,
    secondary: [
      {
        sets: 5,
        workouts: [
          {
            type: WorkoutType.Deadlift,
            reps: 12,
          },
          {
            type: WorkoutType.HangPowerClean,
            reps: 9,
          },
          {
            type: WorkoutType.PushJerks,
            reps: 6,
          },
        ],
      },
    ],
  },
  // {
  //   title: "#3",
  //   main: null,
  //   secondary:
  //     '"DT" \r\n5 rounds:\r\n12 Deadlift\r\n9 Hang power clean\r\n6 Push jerk \r\nWeight: 70/47,5kg\r\n',
  // },
];
