import React from 'react';

import Header from './components/Header';
import MovieLists from './pages/MovieLists';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLists />
      <Footer />
    </div>
  );
}

export default App;
