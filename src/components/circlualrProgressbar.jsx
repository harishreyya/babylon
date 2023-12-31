import React, { useEffect, useState } from 'react';

const CircularProgressBar = ({ percentage,radius,stroke }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(offset + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [offset]);

  // const radius = 45; 
  const circumference = 2 * Math.PI * radius;
  const progress = percentage * circumference / 100;
  const strokeDashoffset = circumference - (offset / 100) * circumference;

  return (
    <svg className="progress-ring" width="100" height="100">
      <circle
        className="progress-ring-circle"
        stroke={stroke} 
        strokeWidth="5"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
        style={{
          strokeDasharray: `${progress} ${circumference}`,
          strokeDashoffset: strokeDashoffset
        }}
      />
      <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="20">
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
