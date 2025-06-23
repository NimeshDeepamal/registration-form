import React, { useState } from 'react';
import axios from 'axios';

const StepTwo = ({ prevStep, formData, updateFormData, setSuccess }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.password || formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/register`, {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
      setSuccess(true);
    } catch (err) {
      alert('Registration failed');
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
        className="input-field"
      />
      {errors.password && <div className="error-text">{errors.password}</div>}

      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={e => updateFormData('confirmPassword', e.target.value)}
        className="input-field"
      />
      {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}

      <div className="button-row">
        <button onClick={prevStep} className="btn-secondary">
          Back
        </button>
        <button onClick={handleSubmit} disabled={loading} className="btn-primary">
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
