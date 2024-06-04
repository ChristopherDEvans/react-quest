import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Dashboard from './components/Dashboard';
import Weather from './components/Weather';
import News from './components/News';
import Events from './components/Events';
import LoginPage from './components/LoginPage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <div>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
