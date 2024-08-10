import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { setLoading, setUser } from '../state/user/userSlice';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
    dispatch(setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !user) {
      console.log('No user found');
      navigate('/', { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>; //will create dedicated loading component later
  }

  return user ? children : null;
};

export default ProtectedRoute;
