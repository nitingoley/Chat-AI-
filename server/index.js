import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; 

const MessageInputComponent = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSendMessage = async () => {
    if (question.trim()) {
      try {
        const res = await axios.post('http://localhost:3000/api/question', {
          question: question,
        });
        setResponse(res.data["AI Response :"]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />

      <div className="flex-grow overflow-y-auto p-4 pt-24 bg-white rounded-md shadow-md mb-4 mx-4">
        {response && (
          <div className="bg-gray-100 text-gray-800 p-4 rounded-md mb-4">
            <strong>AI Response:</strong> {response}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 px-4 pb-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question"
          className="flex-grow p-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 focus:outline-none transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 3.75L10.5 12l11.25 8.25M2.25 12h17.25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MessageInputComponent;
