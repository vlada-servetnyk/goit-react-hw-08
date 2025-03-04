import './App.css'

import { Routes, Route } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from './redux/contacts/operations';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegistrationForm from './pages/RegistrationPage/RegistrationForm';
import LoginForm from './pages/LoginPage/LoginForm';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route 
          path="/contacts" 
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          } 
        />
      </Route>
    </Routes>
  )
}

export default App;
