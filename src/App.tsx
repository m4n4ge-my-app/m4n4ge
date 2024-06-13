//external imports
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//local imports
import JobDescriptions from './pages/iManage/jobDescriptions/JobDescriptions';
import ForgotPassword from './pages/auth/forgotPassword/ForgotPassword';
import CoverLetters from './pages/iManage/coverletters/CoverLetter';
import UserProfile from './pages/system/userProfile/UserProfile';
import { setAuthState } from './state/authentication/authSlice';
import Interview from './pages/getAssist/interview/Interview';
import Automated from './pages/getAssist/automated/Automated';
import Calendar from './pages/iManage/calendar/Calendar';
import NotFound from './pages/system/notFound/NotFound';
import Settings from './pages/system/settings/Settings';
import Resumes from './pages/iManage/resumes/Resumes';
import Landing from './pages/system/landing/Landing';
import Dashboard from './pages/dashboard/Dashboard';
import AddApp from './pages/iManage/addApp/AddApp';
import Layout from './pages/system/layout/Layout';
import Archives from './pages/archives/Archives';
import SignIn from './pages/auth/signin/SignIn';
import SignUp from './pages/auth/signup/SignUp';
import Todos from './pages/iManage/todos/Todos';
import { checkAuth } from './services/auth';
import theme from './theme';
import { RootState } from './state/store';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
  isLoading: boolean;
}

function ProtectedRoute({
  isAuthenticated,
  children,
  isLoading,
}: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate, isLoading]);

  return isAuthenticated ? children : null;
}

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const fetchAuthStatus = async () => {
      const _isAuthenticated = await checkAuth();
      dispatch(setAuthState(_isAuthenticated));
    };

    fetchAuthStatus().catch((error) => {
      console.error('Failed to fetch auth status:', error);
    });
  }, [dispatch, location]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* Unprotected/public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* Protected/private routes */}
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <AddApp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resumes"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <Resumes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coverletters"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <CoverLetters />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <Calendar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/descriptions"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <JobDescriptions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/todos"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <Todos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/interview"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <Interview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/automated"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <Automated />
              </ProtectedRoute>
            }
          />
          <Route
            path="/archives"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <Archives />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <NotFound isPrivateRoute={true} />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Invalid public routes */}
        <Route path="*" element={<NotFound isPrivateRoute={false} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
