import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample data for messages/conversations
const sampleConversations = [
  {
    id: "M001",
    client: "Sarah Johnson",
    subject: "Re: Custody Hearing Prep",
    lastMessage: "Okay, I'll gather those documents...",
    timestamp: "10:15 AM", // Simulate recent time
    unread: true,
    avatarInitial: "SJ",
  },
  {
    id: "M002",
    client: "Michael Brown",
    subject: "Insurance Appeal Update?",
    lastMessage: "Thanks for the update, let me know...",
    timestamp: "Yesterday",
    unread: false,
    avatarInitial: "MB",
  },
  {
    id: "M003",
    client: "Thompson Industries Rep.",
    subject: "Follow up on Council Meeting",
    lastMessage: "Yes, the minutes are attached.",
    timestamp: "Oct 23",
    unread: false,
    avatarInitial: "TI",
  },
  {
    id: "M004",
    client: "Jennifer Wilson",
    subject: "Quick question about settlement",
    lastMessage: "Can we schedule a brief call?",
    timestamp: "Oct 22",
    unread: true,
    avatarInitial: "JW",
  },
];

const MessagesPage = () => {
  const [selectedConversationId, setSelectedConversationId] = useState(
    sampleConversations[0]?.id || null
  ); // Select the first one by default

  const selectedConversation = sampleConversations.find(
    (conv) => conv.id === selectedConversationId
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300">Messages</h1>
        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition-colors duration-200 flex items-center gap-2">
          <i className="fa-solid fa-pen-to-square text-sm"></i> New Message
        </button>
      </div>

      <div className="flex gap-6 h-[calc(100vh-200px)]">
        {" "}
        {/* Adjust height based on layout */}
        {/* Conversation List Sidebar */}
        <div className="w-1/3 bg-neutral-800 rounded-xl shadow-lg overflow-y-auto">
          <div className="p-4 border-b border-neutral-700">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full bg-neutral-700 text-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-1 focus:ring-yellow-500 text-sm"
            />
          </div>
          <ul className="divide-y divide-neutral-700">
            {sampleConversations.map((conv) => (
              <li
                key={conv.id}
                className={`p-4 cursor-pointer hover:bg-neutral-700/50 transition-colors duration-150 ${
                  selectedConversationId === conv.id ? "bg-neutral-700/70" : ""
                }`}
                onClick={() => setSelectedConversationId(conv.id)}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full ${
                        conv.unread ? "bg-yellow-500" : "bg-neutral-600"
                      } flex items-center justify-center text-black text-sm font-bold flex-shrink-0`}
                    >
                      {conv.avatarInitial}
                    </div>
                    <h3
                      className={`font-semibold ${
                        conv.unread ? "text-gray-200" : "text-gray-400"
                      }`}
                    >
                      {conv.client}
                    </h3>
                  </div>
                  <span
                    className={`text-xs ${
                      conv.unread ? "text-yellow-500" : "text-gray-500"
                    }`}
                  >
                    {conv.timestamp}
                  </span>
                </div>
                <p
                  className={`text-sm truncate ${
                    conv.unread ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {conv.subject}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {conv.lastMessage}
                </p>
              </li>
            ))}
            {sampleConversations.length === 0 && (
              <li className="p-4 text-center text-gray-500">
                No messages found.
              </li>
            )}
          </ul>
        </div>
        {/* Selected Conversation View */}
        <div className="w-2/3 bg-neutral-800 rounded-xl shadow-lg flex flex-col">
          {selectedConversation ? (
            <>
              {/* Header */}
              <div className="p-4 border-b border-neutral-700 flex justify-between items-center flex-shrink-0">
                <div>
                  <h2 className="text-lg font-semibold text-gray-200">
                    {selectedConversation.client}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {selectedConversation.subject}
                  </p>
                </div>
                {/* Action buttons could go here */}
                <div>
                  <button className="text-gray-400 hover:text-yellow-500 p-1">
                    <i className="fa-solid fa-reply"></i>
                  </button>
                  <button className="text-gray-400 hover:text-yellow-500 p-1 ml-2">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </div>
              </div>
              {/* Message Body (Placeholder) */}
              <div className="flex-grow overflow-y-auto p-4">
                <p className="text-gray-400">
                  Message content for {selectedConversation.client} will be
                  displayed here...
                </p>
                <p className="text-gray-500 mt-4 text-sm">
                  Received: {selectedConversation.timestamp}
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  "{selectedConversation.lastMessage}"
                </p>

                {/* Example of simulated chat bubbles */}
                <div className="mt-6 space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-neutral-700 p-3 rounded-lg max-w-xs">
                      <p className="text-sm text-gray-300">
                        {selectedConversation.lastMessage}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-yellow-600 p-3 rounded-lg max-w-xs">
                      <p className="text-sm text-black">
                        Okay, sounds good. I will send it over shortly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Reply Input (Placeholder) */}
              <div className="p-4 border-t border-neutral-700 flex-shrink-0">
                <textarea
                  placeholder="Type your reply..."
                  rows="2"
                  className="w-full bg-neutral-700 text-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-1 focus:ring-yellow-500 text-sm resize-none"
                ></textarea>
                <div className="text-right mt-2">
                  <button className="px-4 py-1.5 bg-yellow-500 text-black text-sm font-semibold rounded hover:bg-yellow-600 transition-colors duration-200">
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">
                Select a conversation to view messages.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
