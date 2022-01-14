import React, { createContext, useState } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export default function MovieProviders({ children }) {
  const [results, setResult] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const searchTitle = (text) => {
    setLoading(true);
    axios.get(`https://www.omdbapi.com/?apikey=53c52115&s=${text}`)
      .then((res) => {
        const search = res.data.Search;
        setResult(search);
        setLoading(false);
      })
      .catch(() => {
        console.error
      });
  };

  return (
    <MovieContext.Provider value={{ results, isLoading, searchTitle }}>
      {children}
    </MovieContext.Provider>
  );
}
