import React, { useState } from 'react';
import './Chatbot.css';  // Import the CSS for the chatbot styles

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // Add user message to chat
    setMessages([...messages, { text: userInput, sender: 'user' }]);

    // Simulate bot response after 1 second
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: `Bot: You said "${userInput}"`, sender: 'bot' },
      ]);
    }, 1000);

    // Clear the input field
    setUserInput('');
  };

  return (
    <div className="chatbot-container">
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
        <div className="input-container">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
