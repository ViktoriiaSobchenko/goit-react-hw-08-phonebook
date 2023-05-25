import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const inputValue = contacts.find(
      contact =>
        contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
    );
    inputValue
      ? alert(inputValue.name + `is already in contacts`)
      : dispatch(
          addContact({
            name: form.elements.name.value,
            number: form.elements.number.value,
          })
        );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name" className={css.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        className={css.input}
        placeholder="Ex. Jacob Mercer"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="number" className={css.label}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        className={css.input}
        placeholder="Ex. 222-333-5555"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}
