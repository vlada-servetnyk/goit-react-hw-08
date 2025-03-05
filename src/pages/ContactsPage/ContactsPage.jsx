import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList'

const ContactsPage = () => {
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
