import React, {useState} from "react";
import "../../index.css";

const TasksFilter = ({toggleFilters}) => {
  const [selectedBtn, setSelectedBtn] = useState("All");
  
  function setSelected(e) {
    const selected = e.target.innerHTML;
    let numCode = 0;

    setSelectedBtn(selected)
    if (selected === "Active")    numCode = 1;
    if (selected === "Completed") numCode = 2;
    toggleFilters(numCode)
  }

  return (
    <ul className="filters">
      <li>
        <button className={selectedBtn === "All" ? "selected" : null}
        onClick={(e) => setSelected(e)} >All</button>
      </li>
      <li>
        <button className={selectedBtn === "Active" ? "selected" : null}
        onClick={(e) => setSelected(e)}>Active</button>
      </li>
      <li>
        <button className={selectedBtn === "Completed" ? "selected" : null}
        onClick={(e) => setSelected(e)}>Completed</button>
      </li>
    </ul>
  )
}

export default TasksFilter; 