import "./DayFilter.css";


const DayFilter = (props) => {
  const dayChangeHandler = (event) => {
    props.onChangeDay(event.target.value);

  };

  const daysOfTheWeek = ["понеділок", "вівторок", "середа","четвер","п'ятниця","субота","неділя"]
  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Вибір дня</label>
        <select value={props.day} onChange={dayChangeHandler}>
          <option key={'вибери'} value={'вибери'} >вибери</option>)
          {daysOfTheWeek.map(day => <option key={day} value={day} >{day}</option>)}
        </select>
      </div>
    </div>
  );
};

export default DayFilter;
