import React from 'react';
import ReactDOM from 'react-dom/client';
import '../Css/SuccessPopup.css';

const SuccessPopup = () => {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="success-popup">
      <h1>🎉 Registration Successful!</h1>
      <p>Thank you for registering.</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SuccessPopup />);
