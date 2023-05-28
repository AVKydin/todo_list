import "./Days.css";
import Card from "../UI/Card";
import DayFilter from "./DayFilter";
import React, { useState } from "react";
import DayList from "./DayList";
import CostsDiagram from "./CostsDiagram";

const Days = (props) => {
  const [selectedDay, setSelectedDay] = useState("Понеділок");

  const dayChangeHandler = (day) => {
    setSelectedDay(day);
  };

  const filteredCosts = props.costs.filter(cost => {
    return cost.date === selectedDay
  })


  return (
    <div>
      <Card className="costs">
        <DayFilter day={selectedDay} onChangeDay={dayChangeHandler} />
        {/*<CostsDiagram costs={filteredCosts} />*/}
        <DayList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Days;
