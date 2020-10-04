import React, { useMemo } from "react";
import "./App.css";
import { Day, Workout, Group } from "./types";
import {
  Card,
  Typography,
  Grid,
  Paper,
  makeStyles,
  Theme,
  createStyles,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import days from "./workouts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    workout: {
      marginBottom: 5,
    },
    workoutText: {
      backgroundColor: "#EFEFEF",
    },
    appBar: {
      paddingTop: 20,
    },
    groupText: {
      backgroundColor: "#CCCCCC",
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const renderWorkout = (workout: Workout): JSX.Element => {
    const weight: string = workout.bodyWeight
      ? "With your body weight"
      : workout.repetitionMaximum
      ? "With repetition maximum weight"
      : "With your usual weight";
    return (
      <div className={classes.workout}>
        <Typography
          variant="button"
          display="block"
          className={classes.workoutText}
        >
          {workout.type} {workout.reps} reps
        </Typography>
        {workout.time && (
          <Typography
            variant="button"
            display="block"
            className={classes.workoutText}
          >
            For {workout.time} seconds
          </Typography>
        )}
        {workout.distance && (
          <Typography
            variant="button"
            display="block"
            className={classes.workoutText}
          >
            For {workout.distance} meters
          </Typography>
        )}
        {workout.modifiers &&
          workout.modifiers.map((m) => (
            <Typography
              variant="button"
              display="block"
              className={classes.workoutText}
            >
              {m}
            </Typography>
          ))}
        <Typography
          variant="button"
          display="block"
          className={classes.workoutText}
        >
          {weight}
        </Typography>
        {workout.link && (
          <Link
            variant="button"
            display="block"
            className={classes.workoutText}
            href={workout.link}
          >
            Workout instruction video
          </Link>
        )}
      </div>
    );
  };

  const renderGroup = (group: Group): JSX.Element => {
    return (
      <>
        <Typography variant="h6" className={classes.groupText}>
          {group.sets} {group.sets > 1 ? "SETS" : "SET"}
        </Typography>
        {group.workouts.map(renderWorkout)}
      </>
    );
  };

  const renderGroupArray = (groups: Group[]): JSX.Element[] =>
    groups.map(renderGroup);

  const renderDay = (day: Day): JSX.Element => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Paper key={day.title} className={classes.paper} elevation={1}>
          <Typography variant="h1">{day.title}</Typography>
          {day.main && (
            <>
              <Typography variant="h2">Skills</Typography>
              {renderGroupArray(day.main) || null}
            </>
          )}
          <div className="secondary">
            <Typography variant="h2">Workout</Typography>
            {renderGroupArray(day.secondary)}
          </div>
        </Paper>
      </Grid>
    );
  };

  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Bulk Up
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.appBar}>
        <Grid container spacing={3} className={classes.root}>
          {days.map(renderDay)}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
