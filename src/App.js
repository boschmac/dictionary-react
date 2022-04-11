
import './App.css';
import React from 'react';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        Dictionary
      </header>
      <main> 
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Corinne Long <a href="https://github.com/boschmac/dictionary-react" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a></small>
      </footer>
    </div>
    </div>
  );
}

export default App;
