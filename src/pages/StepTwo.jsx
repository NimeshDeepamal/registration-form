import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StepTwo = ({ prevStep, formData, updateFormData }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validate on every input change
  useEffect(() => {
    const newErrors = {};
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
  }, [formData.password, formData.confirmPassword]);

  const canSubmit = Object.keys(errors).length === 0;

  const handleSubmit = async () => {
    if (!canSubmit) return;

    setLoading(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/register`, {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      // Open success message in new window
      const newWindow = window.open('', '_blank', 'width=400,height=300');
      if (newWindow) {
        newWindow.document.write(`
          <html>
          <head>
            <title>Registration Successful</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #7e22ce, #db2777);
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
                text-align: center;
              }
              h1 {
                font-size: 2rem;
                margin-bottom: 0.5rem;
              }
              p {
                font-size: 1.2rem;
              }
              button {
                margin-top: 20px;
                padding: 10px 20px;
                border: none;
                border-radius: 8px;
                background: white;
                color: #7e22ce;
                font-weight: bold;
                cursor: pointer;
                transition: background-color 0.3s ease;
              }
              button:hover {
                background-color: #e5e7eb;
              }
            </style>
          </head>
          <body>
            <h1>🎉 Registration Successful!</h1>
            <p>Thank you for registering, ${formData.fullName}.</p>
            <button onclick="window.close()">Close</button>
          </body>
          </html>
        `);
        newWindow.document.close();
      } else {
        alert('Please allow popups for this website to see the success message.');
      }
    } catch (err) {
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={e => updateFormData('password', e.target.value)}
        className={`input-field ${errors.password ? 'input-error' : ''}`}
      />
      {errors.password && <div className="error-text">{errors.password}</div>}

      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={e => updateFormData('confirmPassword', e.target.value)}
        className={`input-field ${errors.confirmPassword ? 'input-error' : ''}`}
      />
      {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}

      <div className="button-row">
        <button onClick={prevStep} className="btn-secondary">
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading || !canSubmit}
          className="btn-primary"
          title={canSubmit ? 'Submit' : 'Please fix errors first'}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
