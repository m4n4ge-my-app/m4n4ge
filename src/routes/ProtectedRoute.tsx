import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
  isLoading: boolean;
}

const ProtectedRoute = ({
  isAuthenticated,
  children,
  isLoading,
}: ProtectedRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate, isLoading]);

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
