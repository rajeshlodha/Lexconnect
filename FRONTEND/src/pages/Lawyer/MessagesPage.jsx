import React from "react";
import { Link } from "react-router-dom";

// Placeholder component for Messages
const MessagesPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300">Messages</h1>
        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition-colors duration-200 flex items-center gap-2">
          <i className="fa-solid fa-pen-to-square text-sm"></i> New Message
        </button>
      </div>

      <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
        <p className="text-gray-400">Messaging interface will go here...</p>
        {/* We can build out a chat-like interface later */}
      </div>
    </div>
  );
};

export default MessagesPage;
