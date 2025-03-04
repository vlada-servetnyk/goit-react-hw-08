import { NavLink } from "react-router-dom"
import s from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <nav className={s.log}>
        <NavLink to='/register'>Register</NavLink>  
        <NavLink to='/login'>Log In</NavLink> 
    </nav>
  )
}

export default AuthNav
