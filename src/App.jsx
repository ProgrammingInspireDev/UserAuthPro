import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import isAuthenticated from './utils/auth';
import { setupInactivityListeners } from './utils/sessionManager';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      const stopListening = setupInactivityListeners(() => {
        console.log('⏰ Session timed out due to inactivity!');
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        navigate('/');
      });
      return () => stopListening();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
