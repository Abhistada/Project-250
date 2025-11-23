import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error('Error fetching backend:', error);
        setMessage('Error connecting to backend');
      });
  }, []);

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '100px',
      fontFamily: 'Arial',
      color: '#333'
    }}>
      <h1>🎉 React + Node.js + MySQL Connection Test</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
