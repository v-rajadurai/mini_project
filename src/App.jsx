// App.js
import React, { useState } from 'react';
import './App.css';
import backgroundImage from './assets/hi.jpg'; // Import background image

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    setMessages([...messages, { text: userInput, sender: 'user' }]);

    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: `Placement Genie: You said "${userInput}"`, sender: 'bot' },
      ]);
    }, 1000);

    setUserInput('');
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Placement Genie</h1>
        <p>Your Placement Assistant & HR on your Lap</p>
      </header>

      <div className="chat-container">
        <div className="chatbox">
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>

        <div className="input-container">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            rows={1}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;
