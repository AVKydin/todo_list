import "./DayDate.css";

const DayDate = (props) => {
   const day = props.date.toLocaleString("uk-UK", { day: "2-digit" });

  return (
    <div className="cost-date">
      <div className="cost-date__day">{day}</div>
    </div>
  );
};

export default DayDate;
