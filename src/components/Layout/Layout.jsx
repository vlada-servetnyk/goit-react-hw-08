import { Outlet } from 'react-router-dom';
import AppBar from "../AppBar/AppBar"
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors';

const Layout = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}

export default Layout
