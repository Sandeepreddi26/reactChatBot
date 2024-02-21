import "C:/Users/sande/Desktop/React/myreactapp/src/styles/chatbot.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        // Add initial greeting messages when the component mounts
        setMessages([
            { type: 'bot', text: 'Hello! I am your chatbot assistant. How can I help you?' },
        ]);
    }, []);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    const sendMessage = async () => {
        if (inputText.trim() === '') return;

        const newMessage = { type: 'user', text: inputText };
        setInputText('');

        try {
            // Check if the user's message indicates a request for invoice details
            if (inputText.trim().toLowerCase().includes('invoice details')) {
                setMessages(prevMessages => [...prevMessages, newMessage]);
                setMessages(prevMessages => [
                    ...prevMessages,
                    { type: 'bot', text: 'Sure! Please provide the ID for which you need invoice details.' }
                ]);
            } else {
                const userId = inputText.trim(); // Extract the user ID from the input text
                const response = await axios.get(`http://localhost:8080/users/${userId}`);
                const userData = response.data; // Assuming the response is an object with user data
                const botReply = `User ID: ${userData.id}, Username: ${userData.username}, Email: ${userData.email}`; // Format the bot reply using user data
                const botMessage = { type: 'bot', text: botReply };
                setMessages(prevMessages => [...prevMessages, newMessage, botMessage]); // Add user's and bot's messages to the chat window
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="chatbot-wrapper">
            <div className={`chat-button ${showChat ? 'active' : ''}`} onClick={toggleChat}>
                <i className={`fas ${showChat ? 'fa-times' : 'fa-comment-alt'}`}></i>
            </div>
            {showChat && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="title">Simple Online Chatbot</div>
                        <div className="close-button" onClick={toggleChat}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="msg-container">
                        {messages.map((message, index) => (
                            <div key={index} className={`${message.type}-inbox inbox`}>
                                <div className={`msg-header ${message.type === 'user' ? 'right' : 'left'}`}>
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="typing-field">
                        <div className="input-data">
                            <input
                                id="data"
                                type="text"
                                placeholder="Type something here.."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                required
                            />
                            <button id="send-btn" onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
