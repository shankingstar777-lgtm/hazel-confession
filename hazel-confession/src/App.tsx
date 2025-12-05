import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';

function App() {
  // Force display of port 443 as requested
  const port = '443';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Served on port: <strong>{port}</strong>
        </p>
        <p style={{fontSize: '0.9rem', opacity: 0.9}}>
          Tip: Save this file to trigger a reload in dev mode or rebuild for static serve.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React — inside port web (this is showing)
        </a>
        
        {/* Simple letter + song section */}
        <div style={{marginTop: 18, textAlign: 'left', maxWidth: 720}}>
          <h4 style={{marginBottom: 6}}>Letter</h4>
          <p style={{background: 'rgba(255,255,255,0.04)', padding: 12, borderRadius: 6}}>
            💝 Perfect combination: Your honest words + that emotional song
          </p>
          <div style={{marginTop: 8}}>
            <audio id="confession-song" controls src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
          </div>
        </div>
        <Chat />
      </header>
    </div>
  );
}

export default App;
