import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const filterState = useSelector(state => state.contacts.filter);
  const itemsState = useSelector(state => state.contacts.items);

  const normalizedFilter = filterState.toLowerCase();
  const filterContacts = itemsState.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={s.list}>
      {filterContacts.map(({ name, id, number }) => (
        <ListItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;
