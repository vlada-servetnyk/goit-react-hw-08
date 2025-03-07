import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
  <div className='app'>
     <h1 className='app_title'>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList /> 
  </div>
  )
}

export default ContactsPage
