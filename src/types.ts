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
  InverseRow = "Inverse Row with Barbell",
  Squats = "Squat",
  Superman = "Superman",
  SitUp = "Sit-Up",
  CalfRaise = "Calf Raise",
  BackExtension = "Back Extension",
  SideLatheralRaise = "Side Latheral Raise",
  Chins = "Chins",
  BicepCurl = "Bicep Curl",
  TricepExtension = "Tricep Extension",
  ShoulderPress = "ShoulderPress",
  Shrugs = "Shrugs",
  Lunges = "Lunges"
  
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
  EveryOtherHand = "Every Other Hand",
  OneArmAtATime = "One Arm At A Time",
  WithRotation = "With Rotation",
  LeaningForward = "Leaning Forward",
  WithBarbell = "With Barbell",
  ElbowAgainstLeg = "Elbow Against Leg",
  LyingDown = "Lying down",
  BehindHead = "Behind Head",
  WithKettleBells = "With Kettlebells",
  Walking = "Walking"
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
