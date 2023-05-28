import "./DayItem.css";
import DayDate from "./DayDate";
import Card from "../UI/Card";

const DayItem = (props) => {
  return (
    <li>
      <Card className="cost-item">
        <DayDate date={props.date} />
        <div className="cost-item__description">
          <h2>{props.description}</h2>
          <div className="cost-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default DayItem;
