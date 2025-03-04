import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChatBot.css"; // Ensure you have this CSS file


const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you?", sender: "bot" },
    { text: "Select an option below:", sender: "bot" },
  ]);

  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  const options = [
    { text: "1. About", path: "/about-me", details: "Learn more about me and my journey." },
    { text: "2. Projects", path: "/projects", details: "Explore my projects and technical work." },
    { text: "3. Certifications", path: "/certifications", details: "View my certifications and achievements." },
    { text: "4. Contact", path: "/contact", details: "Get in touch with me." },
  ];

  const handleUserChoice = (option) => {
    setMessages((prev) => [...prev, { text: option.text, sender: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: option.details, sender: "bot" }]);
    }, 500);

    setTimeout(() => {
      navigate(option.path);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      setMessages((prev) => [...prev, { sender: "user", text: userInput }]);
      setUserInput(""); // Clear input field
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: "Please select an option from the list." }]);
      }, 500);
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "🤖"}
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Chatbot</div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "bot" ? "bot-message" : "user-message"}>
                {msg.text}
              </div>
            ))}
            <div className="options-list">
              {options.map((option, index) => (
                <button key={index} className="option-button" onClick={() => handleUserChoice(option)}>
                  {option.text}
                </button>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
