import { useState, useEffect } from 'react';

function TextTransition() {
  const sentences = [
    "What symptoms are you experiencing?",
    "When did your symptoms begin?",
    "Have your symptoms changed or worsened since they started?",
    " Do you have a fever?",
    "Have you taken any medications or treatments for your symptoms?",
    "Do you have any known allergies?",
    "Have you taken any medications or treatments for your symptoms?",
    "Have you recently traveled to another region or country?",
  ];
  // //--------

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(sentences[currentIndex]);
  const [backgroundColor, setBackgroundColor] = useState('transparent');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      setBackgroundColor('transparent');
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setCurrentSentence(sentences[currentIndex]);
    setBackgroundColor('#D0F2EB'); 
  }, [currentIndex]);

  return (
    <div className="text-transition-container">
      <p className="sentence" style={{ backgroundColor }}>{currentSentence}</p>
      <p className="sentence">Do you smoke, and if so, how much?</p>
      <p className="sentence">Do you consume alcohol or use recreational drugs?</p>
    </div>
  );
}

export default TextTransition;
