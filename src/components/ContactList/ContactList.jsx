import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from './ContactList.module.css'
import { useEffect } from "react";
import { fetchData } from "../../redux/contactsOps";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters?.name || "");
    const loading = useSelector(state => state.contacts.loading);
    const error = useSelector(state => state.contacts.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])


    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );


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
                                phone={item.number}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

export default ContactList;