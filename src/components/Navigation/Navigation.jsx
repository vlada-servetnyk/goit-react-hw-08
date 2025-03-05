import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';


const Navigation = () => {
  const user = useSelector(selectUser);

  return (
    <nav className={s.nav}>
      <NavLink to='/'>Home</NavLink>
      {user.name && <NavLink to='/contacts'>Contacts</NavLink>}
    </nav>
  )
}

export default Navigation
