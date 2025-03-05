import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../../../redux/auth/selectors";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

    if (isRefreshing) {
      return <p>Loading...</p>; 
  }
  
  return (isLoggedIn ? children : <Navigate to='/login' />);
};


export default PrivateRoute;
