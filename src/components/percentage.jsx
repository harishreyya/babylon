import { ProgressBar } from "./progressBar";
import { useState, useEffect } from 'react';

function Percentage() {
    const [percentages, setPercentages] = useState([0, 0, 0]);

    useEffect(() => {
      const interval = setInterval(() => {
        // Generate random percentages for each bar
        const newPercentages = percentages.map(() => Math.floor(Math.random() * 100));
        setPercentages(newPercentages);
      }, 2000); // Update percentages every 2 seconds
  
      return () => clearInterval(interval);
    }, [percentages]);
  
    return (
      <div>
        <h1>Dynamic Progress Bars</h1>
        <div className="progress-container">
          <ProgressBar percentage={percentages[0]} />
          <ProgressBar percentage={percentages[1]} />
          <ProgressBar percentage={percentages[2]} />
        </div>
      </div>
    );
  }
  export default Percentage;