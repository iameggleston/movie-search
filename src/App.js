import React from 'react';
import MovieProviders from './components/MovieProviders';
import SearchBox from './components/SearchBox';
import SearchResult from './components/SearchResult';

export default function App() {
  return (
    <MovieProviders>
      <SearchBox />
      <SearchResult />
    </MovieProviders>
  );
}
