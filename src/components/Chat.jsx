import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const scrollRef = useRef(null);

  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });

    const chatMessages = chat?.data?.messages.map((msg) => {
      const { senderId, text } = msg;
      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        text,
      };
    });

    setMessages(chatMessages);
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (!user) return;
    const socket = createSocketConnection();

    socket.emit("joinChat", { userId, targetUserId });

    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      setMessages((messages) => [...messages, { firstName, lastName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const socket = createSocketConnection();

    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId,
      text: newMsg,
    });

    setNewMsg("");
  };

  return (
    <div className="max-w-4xl mx-auto my-10 border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl shadow-2xl h-[80vh] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-4 border-b border-slate-700 text-xl font-bold text-center">
        PeerPort Chat
      </div>

      {/* Chat messages */}
      <div className="flex-1 px-6 py-4 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => {
          const isMe = user.firstName === msg.firstName;
          return (
            <div
              key={index}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-lg text-sm shadow-md ${
                  isMe
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none shadow-lg"
                    : "bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-bl-none shadow-lg"
                }`}
              >
                <div className="text-xs font-semibold opacity-80 mb-1">
                  {msg.firstName} {msg.lastName}
                </div>
                <div>{msg.text}</div>
              </div>
            </div>
          );
        })}
        <div ref={scrollRef} />
      </div>

      {/* Input */}
      <div className="px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-900 border-t border-slate-700 flex gap-3 items-center">
        <input
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 bg-slate-700 border border-slate-600 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
        />
        <button
          onClick={sendMessage}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transform hover:scale-105"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
