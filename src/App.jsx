import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegistrationForm from './pages/RegistrationPage/RegistrationForm';
import LoginForm from './pages/LoginPage/LoginForm';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './config/routes/PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import RestrictedRoute from './config/routes/RestrictedRoute/RestrictedRoute';
import { selectIsRefreshing } from './redux/auth/selectors';


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/register" 
          element={
            <RestrictedRoute redirectTo="/contacts">
              <RegistrationForm />
            </RestrictedRoute>
          }
        />
        <Route 
          path="/login" 
          element={
            <RestrictedRoute redirectTo="/contacts">
              <LoginForm />
            </RestrictedRoute>
          }
        />
        <Route 
          path="/contacts" 
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;