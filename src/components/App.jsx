import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={s.title}>Contacts</h2>
      <Filter label="Find contacts by name" id={nanoid()} />
      <ContactList />
    </div>
  );
};
