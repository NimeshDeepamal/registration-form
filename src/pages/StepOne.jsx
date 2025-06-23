import React, { useState } from 'react';
import '../Css/StepOne.css';

const StepOne = ({ nextStep, formData, updateFormData }) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (formData.phone && !/^0\d{9}$/.test(formData.phone)) newErrors.phone = 'Phone must start with 0 and be 10 digits';
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    } else {
      setErrors(validationErrors);
      setTouched({ fullName: true, email: true, phone: true });
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const isValid = (field) => touched[field] && !errors[field];
  const isInvalid = (field) => touched[field] && errors[field];

  return (
    <div>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={e => updateFormData('fullName', e.target.value)}
        onBlur={() => handleBlur('fullName')}
        className={`input-field ${isValid('fullName') ? 'input-valid' : ''} ${isInvalid('fullName') ? 'input-error' : ''}`}
      />
      {isInvalid('fullName') && <div className="error-text">{errors.fullName}</div>}

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={e => updateFormData('email', e.target.value)}
        onBlur={() => handleBlur('email')}
        className={`input-field ${isValid('email') ? 'input-valid' : ''} ${isInvalid('email') ? 'input-error' : ''}`}
      />
      {isInvalid('email') && <div className="error-text">{errors.email}</div>}

      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={e => updateFormData('phone', e.target.value)}
        onBlur={() => handleBlur('phone')}
        className={`input-field ${isValid('phone') ? 'input-valid' : ''} ${isInvalid('phone') ? 'input-error' : ''}`}
      />
      {isInvalid('phone') && <div className="error-text">{errors.phone}</div>}

      <button onClick={handleNext} className="btn-primary">Next</button>
    </div>
  );
};

export default StepOne;