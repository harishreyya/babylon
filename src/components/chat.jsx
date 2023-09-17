import { useState, useEffect, useRef } from "react";
import TypewriterText from "./TypewriterText";
import { conversation } from "./conversation";



const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const typewriterEffect = () => {
      if (currentMessageIndex < conversation.length) {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            conversation[currentMessageIndex],
          ]);
          setCurrentMessageIndex(currentMessageIndex + 1);
        }, 2000);
      }
    };

    typewriterEffect();
  }, [currentMessageIndex]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container" style={{ maxHeight: "300px" ,overflow: "hidden"}} ref={chatContainerRef}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.name === "User" ? "user" : "doctor"}`}
        >
          <span className="message-name">{message.name}: </span>
          <TypewriterText text={message.text} typingSpeed={40} />
        </div>
      ))}
    </div>
  );
};

export default Chat;
