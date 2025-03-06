import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from './ContactList.module.css'
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors";


const ContactList = () => {
    
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const visibleContacts = useSelector(selectFilteredContacts);


    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul className={s.contacts_list}>
                {visibleContacts.map(item => {
                    return (
                        <li className={s.contact_item} key={item.id}>
                            <Contact
                                id={item.id}
                                name={item.name}
                                number={item.number}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

export default ContactList;