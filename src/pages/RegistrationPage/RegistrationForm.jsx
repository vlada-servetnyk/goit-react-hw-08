import { Field, Form, Formik } from "formik"
import s from './RegistrationForm.module.css'
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = (values, options) => {
        dispatch(registerThunk(values));
        options.resetForm();
    }

  return (
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.form} >
                <label className={s.label}>
                    <span>Name:</span>
                    <Field className={s.input} name='name'/>
                </label>
                <label className={s.label}>
                    <span>E-mail:</span>
                    <Field className={s.input} name='email'/>
                </label>
                <label className={s.label}>
                    <span>Password:</span>
                    <Field className={s.input} name='password' type='password'/>
                </label>
                <button className={s.btn} type='submit'>Log In</button>
            </Form>
        </Formik>
    </div>
  )
}

export default RegistrationForm
