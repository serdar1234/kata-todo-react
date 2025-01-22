import React from "react";
import PropTypes from "prop-types";
import "../../index.css";

FilterBtn.propTypes = {
  name: PropTypes.string,
  selectedBtn: PropTypes.string,
  setSelected: PropTypes.func.isRequired
}

FilterBtn.defaultProps = {
  name: 'All',
  selectedBtn: 'All',
  setSelected: () => {}
}

export default function FilterBtn({ name, setSelected, selectedBtn}) {
  return (
    <li>
      <button className={selectedBtn === name ? "selected" : null}
      onClick={(e) => setSelected(e)} >{name}</button>
    </li>
  )
}