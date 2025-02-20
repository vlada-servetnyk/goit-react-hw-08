import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './ContactForm.module.css';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
    const nameField = useId();
    const phoneField = useId();

    const initialValues = {
        name: '',
        number: '',
    };
    const dispatch = useDispatch();

    const applySchema = Yup.object().shape({
        name: Yup.string()
            .required('Required')
            .min(3, 'To Short!')
            .max(50, 'To long!'),
        number: Yup.string()
            .required('Required')
            .min(3, 'To Short!')
            .max(50, 'To long!')
    });

    const onSubmit = (values, actions) => {
        const newContact = {
            name: values.name,
            number: values.number,
            id: nanoid()
        };
        dispatch(addContact(newContact));
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={applySchema}>
            <Form className={s.form_wrapper}>
                <label className={s.form_label} htmlFor={nameField}>Name</label>
                <Field className={s.form_input} type="text" name="name" id={nameField} />
                <ErrorMessage className={s.error} component='span' name='name' />
                <label className={s.form_label} htmlFor={phoneField}>Number</label>
                <Field className={s.form_input} type="phone" name="number" id={phoneField} />
                <ErrorMessage className={s.error} component='span' name='number' />
				<button className={s.btn_add} type="submit">Add contact</button>
			</Form>
    </Formik>
    )
};

export default ContactForm;