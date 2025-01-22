import React, {useState} from "react";
import PropTypes from "prop-types";
import "../../index.css";
import FilterBtn from "../filter-btn/filter-btn";

const TasksFilter = ({toggleFilters}) => {
  const [selectedBtn, setSelectedBtn] = useState("All");
  const btnNames = ["All", "Active", "Completed"];

  function setSelected(e) {
    const selected = e.target.innerHTML;
    let numCode = 0;

    setSelectedBtn(selected)
    if (selected === "Active")    numCode = 1;
    if (selected === "Completed") numCode = 2;
    toggleFilters(numCode)
  }

  const buttons = btnNames.map((item) => {
    return <FilterBtn 
      selectedBtn={selectedBtn} 
      setSelected={setSelected} 
      key={item} name={item} 
    />
  });
  
  return (
    <ul className="filters">
      { buttons }
    </ul>
  )
}

TasksFilter.propTypes = {
  toggleFilters: PropTypes.func.isRequired,
}

TasksFilter.defaultProps = {
  toggleFilters: () => {console.log("toggleFilters was not passed in props")}
}

export default TasksFilter; 