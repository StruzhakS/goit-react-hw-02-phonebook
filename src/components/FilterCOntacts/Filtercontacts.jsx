import propTypes from 'prop-types';
import React from 'react';
import s from './Filtercontacts.module.css';

const Filter = ({ filterContacts, value }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        onChange={filterContacts}
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
  filterContacts: propTypes.func.isRequired,
};
export default Filter;
