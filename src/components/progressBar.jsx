
export const ProgressBar=({ percentage }) =>{
    const progressBarStyle = {
      width: `${percentage}%`,
      height: '6px',
      backgroundColor: '#409B95',
      transition: 'width 2s ease',
    };
  
    const progressWrapperStyle = {
      width: '100%',
      height: '6px',
      backgroundColor: '#C9C8C9',
      position: 'relative',
    };

    return (
        <div className="percentage-bar-wrapper">
          <div className="bar-main" style={progressWrapperStyle}>
            <div className="bar-main" style={progressBarStyle}></div>
          </div>
          <div className="small-text">{percentage}% Likely</div>
        </div>
      );
    }


