import { Field, Form, Formik } from "formik";
import s from './LoginForm.module.css'

const LoginForm = () => {
  return (
      <div>
          <Formik>
              <Form className={s.form}>
                  <label className={s.label}>
                      <span>E-mail:</span>
                      <Field className={s.input} name='email'/>
                  </label>
                  <label className={s.label}>
                      <span>Password:</span>
                      <Field className={s.input} name='password' type='password'/>
                  </label>
                  <button type='submit'>Login</button>
              </Form>
          </Formik>
    </div>
  )
}

export default LoginForm
