import s from './UserMenu.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutThunk());
    }

  return (
    <div className={s.header_wrapper}>
      <p className={s.text}>Welcome, {user.name}!</p>
      <button className={s.btn} onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserMenu
