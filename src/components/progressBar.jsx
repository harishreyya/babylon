// ProgressBar component
export const ProgressBar=({ percentage }) =>{
    const progressBarStyle = {
      width: `${percentage}%`,
      height: '8px',
      backgroundColor: '#409EA1',
      transition: 'width 1s ease', // CSS transition for animation
    };
  
    const progressWrapperStyle = {
      width: '100%',
      height: '8px',
      backgroundColor: '#E3E2E5',
      position: 'relative',
    };

    return (
        <div>
          <div style={progressWrapperStyle}>
            <div style={progressBarStyle}></div>
          </div>
          <p>{percentage}%</p>
        </div>
      );
    }


