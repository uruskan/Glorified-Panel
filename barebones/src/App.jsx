import React, { useState, useEffect } from 'react';
import { invoke } from "@tauri-apps/api/tauri";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import Logs from './logs';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const loggedIn = await invoke('is_logged_in'); // Wrap 'is_logged_in' in quotes
        console.log(loggedIn);
        setIsLoggedIn(loggedIn);

      } catch (error) {
        console.error('Error occurred while fetching login status:', error);
      }
    };
    fetchLoginStatus();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/logs'Component={Logs} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/" Component={isLoggedIn ? Dashboard : LoginPage} />
      </Routes>
    </Router>
  );
}

export default App;
