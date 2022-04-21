import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from 'components/Redux/Contacts/slice';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';

export const ContactForm = () => {
  const [newName, setName] = useState('');
  const [number, setNumber] = useState('');
  const itemsState = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newObj = { id: nanoid(), name: newName, number: number };
    if (
      itemsState.find(
        ({ name }) => name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      return alert(`${newName} is already in contacts`);
    }
    dispatch(addContact(newObj));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor={nameInputId} className={s.label}>
        Name
      </label>
      <input
        type="text"
        id={nameInputId}
        name="name"
        value={newName}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        className={s.input}
        required
      />
      <label htmlFor={numberInputId} className={s.label}>
        Number
      </label>
      <input
        type="tel"
        id={numberInputId}
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        className={s.input}
        required
      />
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
};
