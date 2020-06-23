import { Day, WorkoutType, Modifiers } from "./types";
import { withTheme } from "@material-ui/core";

export const days: Day[] = [
  {
    title: "ZM#1",
    secondary: [
      {
        sets: 3,
        workouts: [{
          type: WorkoutType.BenchPress,
          reps: 10,
        }]
      },
      {
        sets: 3,
        workouts: [{
          type: WorkoutType.InverseRow,
          reps: 10
        }]
      },
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.Squats,
            reps: 10,
            modifiers: [Modifiers.WithBarbellOnShoulders]
          }
        ]
      },
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.Superman,
            reps: 10,
            modifiers: [
              Modifiers.On45DegreeBench,
              Modifiers.WithDumbells
            ]
          }
        ]
      },
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.SitUp,
            reps: 15,
            bodyWeight: true
          }
        ]
      }
    ]
  },
  {
    title: "ZM#2",
    secondary: [
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.Deadlift,
            reps: 10
          }
        ]
      },
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.BenchPress,
            reps: 10,
            modifiers: [
              Modifiers.On45DegreeBench
            ]
          }
        ]
      },
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.CalfRaise,
            reps: 20,
            modifiers: [
              Modifiers.WithBarbellOnShoulders
            ]
          }
        ]
      },
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.BackExtension,
            reps: 15,
            modifiers: [
              Modifiers.OnBench
            ]
          }
        ]
      },
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.SideLatheralRaise,
            reps: 10,
            modifiers: [Modifiers.WithDumbells]
          }
        ]
      },
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.Chins,
            reps: 999,
            bodyWeight: true,
            modifiers: [Modifiers.AsManyAsYouCanDo, Modifiers.OptionalRubberBand]
          }
        ]
      }
    ]
  },
  {
    title: "ZM#3",
    secondary: [
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.BicepCurl,
            reps: 10,
            modifiers: [Modifiers.WithBarbell,
            Modifiers.Standing]
          },
          {
            type: WorkoutType.BicepCurl,
            reps: 10,
            modifiers: [
              Modifiers.WithBarbell,
              Modifiers.Standing,
              Modifiers.LeaningForward
            ]
          }
        ]
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
              Modifiers.EveryOtherHand,
              Modifiers.WithRotation
            ]
          }
        ]
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
              Modifiers.OneArmAtATime
            ]
          }
        ]
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
            ]
          }
        ]
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
              Modifiers.OnBench
            ]
          }
        ]
      },
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.Shrugs,
            reps: 12,
            modifiers: [
              Modifiers.WithKettleBells,
              Modifiers.Standing
            ]
          }
        ]
      },
      {
        sets: 3,
        workouts: [
          {
            type: WorkoutType.Lunges,
            reps: 16,
            modifiers: [
              Modifiers.Walking,
              Modifiers.WithKettleBells
            ]
          }
        ]
      }
    ]
  },
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
