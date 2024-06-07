//external imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
//local imports
import JobDescriptions from './pages/iManage/jobDescriptions/JobDescriptions';
import ForgotPassword from './pages/auth/forgotPassword/ForgotPassword';
import CoverLetters from './pages/iManage/coverletters/CoverLetter';
import UserProfile from './pages/system/userProfile/UserProfile';
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
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Unprotected/public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          {/* Protected/private routes */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<AddApp />} />
            <Route path="/resumes" element={<Resumes />} />
            <Route path="/coverletters" element={<CoverLetters />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/descriptions" element={<JobDescriptions />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/automated" element={<Automated />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound isPrivateRoute={true} />} />
          </Route>

          {/* Invalid public routes */}
          <Route path="*" element={<NotFound isPrivateRoute={false} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
