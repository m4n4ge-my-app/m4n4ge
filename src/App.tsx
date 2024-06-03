import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
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
          <Route path="/descriptions" element={<Descriptions />} />
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
  );
}

export default App;
