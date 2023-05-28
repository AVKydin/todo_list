import React, { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Days from "./components/Todos/Days";


const INITIAL_COSTS = [
    ...JSON.parse(localStorage.getItem('todos'))
];

console.log(INITIAL_COSTS)

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [...cost, ...prevCosts];
    });
  };
  return (
    <div>

      <NewCost onAddCost={addCostHandler} />
      <Days costs={costs} />
    </div>
  );
};

export default App;
