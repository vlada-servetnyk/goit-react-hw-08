import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";

const RestrictedRoute = ({ component, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (isLoggedIn ? <Navigate to={redirectTo} /> : component);
};

export default RestrictedRoute;
