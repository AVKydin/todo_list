import React, {useEffect, useState} from "react";
import NewCost from "./components/NewCost/NewCost";
import Days from "./components/Todos/Days";

let INITIAL_COSTS;

    if(JSON.parse(localStorage.getItem('todos'))){
         INITIAL_COSTS = [
    ...JSON.parse(localStorage.getItem('todos'))
    ];
    }else {
        INITIAL_COSTS = [];
    }


const App = () => {
    const [costs, setCosts] = useState(INITIAL_COSTS);

    useEffect(()=>{},[INITIAL_COSTS])


  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [...cost];
    });
  };
    const deleteTodo = (cost) =>{
        setCosts((prevCosts) => {
            return [...cost];
        });
    }

  return (
    <div>

      <NewCost onAddCost={addCostHandler} />
      <Days costs={costs} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default App;
