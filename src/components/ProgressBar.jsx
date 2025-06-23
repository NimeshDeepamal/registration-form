import React from 'react';
import '../Css/ProgressBar.css';

const ProgressBar = ({ formData, step }) => {
  const fields = [formData.fullName, formData.email, formData.phone, formData.password, formData.confirmPassword];
  let filled = 0;

  if (formData.fullName.trim()) filled++;
  if (formData.email.trim()) filled++;
  if (formData.phone.trim()) filled++;
  if (formData.password?.length >= 6) filled++;
  if (formData.confirmPassword?.length >= 6) filled++;

  const percent = Math.floor((filled / fields.length) * 100);

  return (
    <div className="progressbar-container" aria-label={`Progress: ${percent}%`}>
      <div className="progressbar-bg">
        <div className="progressbar-fill" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="progressbar-text">{percent}% Complete</div>
    </div>
  );
};

export default ProgressBar;
