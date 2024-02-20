import "C:/Users/sande/Desktop/React/myreactapp/src/styles/chatbot.css"
import React, { useState } from 'react';


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleMessageSend = (message) => {
    // Add user message to chat window
    setMessages([...messages, { text: message, sender: 'user' }]);

    // Simulate bot response (replace with actual logic)
    setTimeout(() => {
      setMessages([...messages, { text: 'This is a bot response.', sender: 'bot' }]);
    }, 500);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`}>
      <div className="chat-toggle-btn" onClick={toggleChatbot}>
        {isOpen ? (
          <button onClick={toggleChatbot}>Close Chat</button>
        ) : (
          <button onClick={toggleChatbot}>Open Chat</button>
        )}
      </div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      {isOpen && (
        <input
          type="text"
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleMessageSend(e.target.value);
              e.target.value = '';
            }
          }}
        />
      )}
    </div>
  );
};

export default Chatbot;