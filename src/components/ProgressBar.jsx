import React from 'react';

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-background">
        <div className={`progress-bar-fill ${step >= 2 ? 'full' : 'half'}`}></div>
      </div>
      <div className="progress-text">Step {step} of 2</div>
    </div>
  );
};

export default ProgressBar;
