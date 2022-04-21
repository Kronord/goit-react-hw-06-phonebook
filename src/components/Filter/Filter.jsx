import React from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { change } from 'components/Redux/Filter/slice';
import s from './Filter.module.css';

const Filter = ({ id, label }) => {
  const dispatch = useDispatch();
  const filterState = useSelector(state => state.contacts.filter);

  const filterStateChange = evt => {
    dispatch(change(evt.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={filterState}
        onChange={filterStateChange}
        className={s.input}
      />
    </div>
  );
};

Filter.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default Filter;
