import DayItem from "./DayItem";
import "./DayList.css";

const DayList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">Який день цікавить?</h2>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <DayItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default DayList;
