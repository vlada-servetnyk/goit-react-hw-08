import { Field, Form, Formik } from "formik";
import s from './LoginForm.module.css'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values, options) => {
        dispatch(loginThunk(values))
        .unwrap()
        .then (() => {
            navigate('/contacts', { replace: true });
         })
        .catch((er) => console.log(er.message));

    options.resetForm();
    }

    return (
      <div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form className={s.form} >
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

export default LoginForm
