import "./DayItem.css";
import DayDate from "./DayDate";
import Card from "../UI/Card";
import {useEffect, useState} from "react";


const DayItem = (props) => {
let [clas, setClass] = useState("cost-item");
    const done =()=>{
        return setClass('done')

    }
    console.log(props)
    const deleteTodo = (e) =>{
        if (localStorage.getItem('todos')) {
            let todos = JSON.parse(localStorage.getItem('todos'));
            const  filterTodos = todos.filter(todo=>todo.id!==props.id)
            localStorage.setItem('todos', JSON.stringify(filterTodos))
            props.deleteTodo(filterTodos)
        }

    }

  return (
    <li>
      <Card className={clas}>
        {/*<DayDate date={props.date} />*/}
        <div className="cost-item__description">
          <h2>{props.description}</h2>
        </div>
          <div className="cost-item__price">${props.amount}</div>
          <button onClick={done}>Виконано</button>
          <button onClick={deleteTodo}>Видалити</button>
      </Card>
    </li>
  );
};

export default DayItem;
