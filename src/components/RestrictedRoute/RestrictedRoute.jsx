import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";

const RestrictedRoute = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return children;
};

export default RestrictedRoute;
