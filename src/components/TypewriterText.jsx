import React, { useState, useEffect } from "react";

const TypewriterText = ({ text, typingSpeed }) => {
  const [displayText, setDisplayText] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const words = text.split(" ");
    const animatedWords = words.map((word, index) => {
      if (Math.random() < 0.2) {
        return (
          <span key={index} className="glow">
            {word}{" "}
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    });

    const typingInterval = setInterval(() => {
      if (currentIndex === words.length) {
        clearInterval(typingInterval);
      } else {
        setDisplayText((prevText) => [
          ...prevText,
          animatedWords[currentIndex],
        ]);
        setCurrentIndex(currentIndex + 1);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, currentIndex, typingSpeed]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const spans = document.querySelectorAll(".glow");
      spans.forEach((span) => {
        span.classList.remove("glow");
      });
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [displayText]);

  return <div className="typewriter-text">{displayText}</div>;
};

export default TypewriterText;
