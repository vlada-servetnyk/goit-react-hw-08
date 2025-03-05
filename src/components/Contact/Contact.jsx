import { ImPhone, ImUser } from "react-icons/im";
import s from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useState } from "react";

const Contact = ({ name, number, id, }) => {
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newPhone, setNewPhone] = useState(number);

    const handleEdit = () => {
        dispatch(editContact({ id, name: newName, number: newPhone }));
        setIsEditing(false);
    };

    return (
        <div className={s.contact_wrapper}>
            <ul className={s.contact}>
                <li className={s.contact_item}>
                    <ImUser className={s.contact_svg} />
                {isEditing ? (
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                    ) : (
                        name
                    )}
                </li>
                <li className={s.contact_item}>
                    <ImPhone className={s.contact_svg} />
                {isEditing ? (
                        <input
                            type="text"
                            value={newPhone}
                            onChange={(e) => setNewPhone(e.target.value)}
                        />
                    ) : (
                        number
                    )}
                </li>
            </ul>
            <div className={s.wrapper_btn}>
            {isEditing ? (
                <button className={s.contact_btn} onClick={handleEdit}>Save</button>
            ) : (
                <button className={s.contact_btn} onClick={() => setIsEditing(true)}>Edit</button>
            )}
                <button className={s.contact_btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
            </div>
        </div>
    )

};

export default Contact;