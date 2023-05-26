import propTypes from 'prop-types';
import React from 'react';

const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contacts by name
      <input
        onChange={onChange}
        name="filter"
        type="text"
        value={value}
        placeholder="Enter name to search"
      />
    </label>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
export default Filter;
