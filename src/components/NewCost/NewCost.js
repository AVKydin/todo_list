import React, { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    let costData2
    if (localStorage.getItem('todos')) {
      costData2 = JSON.parse(localStorage.getItem('todos'));
      costData2.push(costData)
      localStorage.setItem('todos', JSON.stringify(costData2))
    } else {
      localStorage.setItem('todos', '[]');
      costData2 = JSON.parse(localStorage.getItem('todos'));
      costData2.push(costData)
      localStorage.setItem('todos', JSON.stringify(costData2))
    }


    props.onAddCost(costData2);
    setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Додати нову справу</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
