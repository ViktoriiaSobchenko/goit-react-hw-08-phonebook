import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TbFaceIdError } from 'react-icons/tb';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Loader from '../components/Loader/Loader';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && (
        <>
          <h2>Sory! Something went wrong... Try again later</h2>
          <TbFaceIdError className={css.error_icon} />
        </>
      )}
      <ContactList />
    </div>
  );
}
