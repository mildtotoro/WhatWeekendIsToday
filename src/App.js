import React from 'react';
import WhatDay from './components/WhatDay';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>What Weekend is today?</h1>
      <header className="App-header">
        <WhatDay/>   
      </header>
    </div>
  );
}

export default App;
