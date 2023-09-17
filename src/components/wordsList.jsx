import React, { useEffect, useState } from 'react';
import { symptoms } from './conversation';

const WordList = () => {
  const [currentWord, setCurrentWord] = useState({});
  const [previousWords, setPreviousWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wordIndex < symptoms.length) {
        setPreviousWords((prevWords) => [...prevWords, currentWord]);
        setCurrentWord(symptoms[wordIndex]);
        setWordIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval); 
      }
    }, 2000); 

    return () => clearInterval(interval);
  }, [symptoms, wordIndex, currentWord]);

  return (
    <div>
      <h1>Symptom List</h1>
      <div className="symptom-container">
        <div
          className={`current-word zoom-effect`}
          style={{
            color: currentWord.textColor,
            backgroundColor: currentWord.bgColor,
          }}
        >
          {currentWord.text}
        </div>
        <div className="previous-words">
          {previousWords.map((word, index) => (
            <div
              key={index}
              className="previous-word"
              style={{
                color: word.textColor,
                backgroundColor: word.bgColor,
              }}
            >
              {word.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordList;
