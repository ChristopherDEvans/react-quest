import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { ProgressProvider } from './context/ProgressContext';
import Dashboard from './components/Dashboard';
import Weather from './components/Weather';
import News from './components/News';
import Events from './components/Events';
import LoginPage from './components/LoginPage';
import NavigationBar from './components/NavigationBar';
import Profile from './components/Profile';
import Challenges from './components/Challenges';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <ProgressProvider>
          <Router>
            <div>
              <NavigationBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/news" element={<News />} />
                <Route path="/events" element={<Events />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/challenges" element={<Challenges />} />
              </Routes>
            </div>
          </Router>
        </ProgressProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
