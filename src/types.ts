export enum WorkoutType {
  Pushup = "Push-up",
  Backsquat = "Backsquat",
  FarmersCarry = "Farmers Carry",
  DeficitPushUp = "Deficit Push-ups",
  PushJerks = "Push Jerks",
  Deadlift = "Deadlift",
  SquatClean = "Squat Clean",
  MuscleUp = "Muscle-up",
  HangPowerClean = "Hang Power Clean",
  RopeClimb = "Rope Climb",
}

export enum Modifiers {
  HandOnDumbells = "Hands on Dumbells",
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
