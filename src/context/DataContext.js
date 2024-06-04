import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

function DataProvider({ children }) {
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchWeather();
    fetchNews();
    fetchEvents();
  }, []);

  const fetchWeather = async () => {
    const response = await fetch('/api/weather');
    const data = await response.json();
    setWeather(data);
  };

  const fetchNews = async () => {
    const response = await fetch('/api/news');
    const data = await response.json();
    setNews(data);
  };

  const fetchEvents = async () => {
    const response = await fetch('/api/events');
    const data = await response.json();
    setEvents(data);
  };

  return (
    <DataContext.Provider value={{ weather, news, events }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
