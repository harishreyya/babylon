import { ProgressBar } from "./progressBar";
import { useState, useEffect } from 'react';

function Percentage() {
    const [percentages, setPercentages] = useState([0, 0, 0]);

    useEffect(() => {
      const interval = setInterval(() => {
        const newPercentages = percentages.map(() => Math.floor(Math.random() * 100));
        setPercentages(newPercentages);
      }, 3000); 
  
      return () => clearInterval(interval);
    }, [percentages]);
  // ---------------------
    return (
      <div>
        <div className="progress-container">
          <div className="percentage-disease-name">Meniere's Disease</div>
          <ProgressBar percentage={percentages[0]} />
          <br />
          <div className="percentage-disease-name">Benign paroysmal Positional Vertigo</div>
          <ProgressBar percentage={percentages[1]} />
          <br />
          <div className="percentage-disease-name">Labyrinthiitis</div>
          <ProgressBar percentage={percentages[2]} />
        </div>
      </div>
    );
  }
  export default Percentage;