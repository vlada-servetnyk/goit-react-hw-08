import s from './AppBar.module.css'
import Navigation from "../Navigation/Navigation"
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors.js";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

    if (isRefreshing) {
    return null; 
  }

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav /> }
    </header>
  )
}

export default AppBar
