import React, { useMemo } from 'react';
import { days } from "./data";
import './App.css';

export type Day = {
  Skills: string | null;
  Workout: string;
}

const renderDay = (day: Day): JSX.Element => {
  return (<div className="day" key={day.Workout}>
    <div className="skills">{day.Skills || ""}</div>
    <div className="workout">{day.Workout || ""}</div>
  </div>)
}

const App: React.FC = () => {
  const rows: Day[][] = useMemo<Day[][]>(() =>
    days.reduce((aggregate: Day[][], current: Day) => {
      let last: Day[] | undefined = aggregate.pop();
      if (!last) {
        return [...aggregate, current];
      }
      if (last.length < 3) {
        return [...aggregate, [...last, current]]
      }
      return [...aggregate, ...last, [current]];
    }, [] as Day[][])
    , []);
  return (
    <div className="app">
      {days.map(renderDay)}
    </div>
  );
}

export default App;
