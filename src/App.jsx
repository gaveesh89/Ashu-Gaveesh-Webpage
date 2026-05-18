import { useEffect, useState } from 'react';
import init, { get_greeting } from '../src-rust/pkg/core_wasm.js';
import './index.css';

function App() {
  const [wasmMessage, setWasmMessage] = useState('Loading Wasm...');

  useEffect(() => {
    // Initialize the Wasm module
    init().then(() => {
      const greeting = get_greeting();
      setWasmMessage(greeting);
    }).catch((err) => {
      console.error("Failed to load Wasm:", err);
      setWasmMessage("Error loading Wasm module");
    });
  }, []);

  return (
    <div className="App">
      <header className="hero-banner">
        <h1>Website project</h1>
        <p className="wasm-status">Wasm Status: {wasmMessage}</p>
      </header>
    </div>
  );
}

export default App;
