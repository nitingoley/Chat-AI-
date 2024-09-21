import React, { useState } from 'react';
import MessageBubbleComponent from '../components/MessageBubbleComponent';
import MessageInputComponent from "../components/MessageInputComponent";

const Home = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    const newMessages = [...messages, { text: message, isUser: true }];
    setMessages(newMessages);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: 'AI is responding', isUser: false },
      ]);
    }, 1000);
  };

  return (
    <div className='flex flex-col h-screen'>
      {/* Chat messages area, allowing scroll */}
      <div className='flex-1 overflow-y-auto p-4'>
        {messages.map((msg, index) => (
          <MessageBubbleComponent key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>

      {/* Fixed input box at the bottom */}
      <div className="fixed bottom-0 w-full bg-gray-800">
        <MessageInputComponent onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Home;
