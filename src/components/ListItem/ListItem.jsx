import propTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/Redux/Contacts/slice';
import s from './ListItem.module.css';

const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <li className={s.item}>
      {name}: {number}
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={s.btn}
      >
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default ListItem;
