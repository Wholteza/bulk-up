export enum WorkoutType {
  Pushup = "Push-Up",
  Backsquat = "Backsquat",
  FarmersCarry = "Farmers Carry",
  DeficitPushUp = "Deficit Push-ups",
  PushJerks = "Push Jerks",
  Deadlift = "Deadlift",
  SquatClean = "Squat Clean",
  MuscleUp = "Muscle-up",
  HangPowerClean = "Hang Power Clean",
  RopeClimb = "Rope Climb",
  BenchPress = "Bench Press",
  BentOverRowWithBarbell = "Bent Over Row with Barbell",
  BarbellBackSquat = "Squat",
  LyingDumbellFrontRaise = "Lying Dumbell Front Raise",
  SitUp = "Sit-Up",
  CalfRaise = "Calf Raise",
  BackExtension = "Back Extension",
  LaterialRaise = "Side Latheral Raise",
  PullUps = "Pull Ups",
  BicepCurl = "Bicep Curl",
  TricepExtension = "Tricep Extension",
  ShoulderPress = "ShoulderPress",
  Shrugs = "Shrugs",
  Lunges = "Lunges",
  LegRaises = "Leg Raises",
  CleanAndPress = "Clean and Press",
  ConcentrationCurl = "Concentration Curl",
  TBarRow = "T-Bar Row",
}

export enum Modifiers {
  HandOnDumbells = "Hands on Dumbells",
  WithBarbellOnShoulders = "Barbell on Shoulders",
  On45DegreeBench = "On 45 Degree Bench",
  WithDumbells = "With Dumbells",
  OnBench = "On Bench",
  AsManyAsYouCanDo = "As Many As You Can Do",
  OptionalRubberBand = "Optional Rubber Band",
  Standing = "Standing",
  Sitting = "Sitting",
  AlternatingHands = "Alternating Hands",
  OneArmAtATime = "One Arm At A Time",
  WithRotation = "With Rotation",
  LeaningForward = "Leaning Forward",
  WithBarbell = "With Barbell",
  ElbowAgainstLeg = "Elbow Against Leg",
  LyingDown = "Lying down",
  BehindHead = "Behind Head",
  WithKettleBells = "With Kettlebells",
  Walking = "Walking",
  LiftOneEndOfTheBarbell = "Lift One End Of the Barbell",
  OptionalUseCableMachineGrip = "Optional Use Narrow Grip From Cable Machine",
  OnGHD = "On GHD",
}

export type Workout = {
  type: WorkoutType;
  reps: number;
  bodyWeight?: boolean;
  distance?: number;
  time?: number;
  link?: string;
  modifiers?: Modifiers[];
  repetitionMaximum?: boolean;
};

export type Group = {
  workouts: Workout[];
  sets: number;
  time?: number;
};

export type Day = {
  title: string;
  main?: Group[];
  secondary: Group[];
};
