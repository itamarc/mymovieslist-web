import React from 'react';
// import { Router } from 'react-router-dom';

import Menu from './components/Menu';

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <div id="content">&nbsp;</div>
      <footer>
        <p>My Movies List is a <a href="https://itamarc.github.io/mymovieslist">portfolio project</a> created by <a href="https://github.com/itamarc">itamarc</a>.</p>
      </footer>
    </div>
  );
}

export default App;
