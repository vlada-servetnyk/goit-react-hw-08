import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ component, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

    if (isRefreshing) {
      return <p>Loading...</p>; 
  }
  
  return (isLoggedIn ? component : <Navigate to={redirectTo} />);
};


export default PrivateRoute;
