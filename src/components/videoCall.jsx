import React from 'react';
import myVideo from './video_5.mp4';
import yourVideo from './video_2.mp4';

export const VideoCall=()=> {
  return (
    <div className="container">
      <div className="content">
        <video controls autoPlay loop className="video">
          <source src={yourVideo} type="video/mp4" />
        </video>
        
      </div>
      <div className="bottom-right">
        <video autoPlay loop className="video">
          <source src={myVideo} type="video/mp4" />
        </video>
        
      </div>
    </div>
  );
}


