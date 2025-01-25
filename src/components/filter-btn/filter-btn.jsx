import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const FilterBtn = ({ name, changeSelected, selectedBtn }) => {
  return (
    <li>
      <button type="button" className={selectedBtn === name ? 'selected' : null} onClick={(e) => changeSelected(e)}>
        {name}
      </button>
    </li>
  );
};

FilterBtn.propTypes = {
  name: PropTypes.string,
  selectedBtn: PropTypes.string,
  changeSelected: PropTypes.func,
};

FilterBtn.defaultProps = {
  name: 'All',
  selectedBtn: 'All',
  changeSelected: () => {},
};

export default FilterBtn;
