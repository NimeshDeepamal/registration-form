import React, { useState } from 'react';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import Success from './pages/Success';
import ProgressBar from './components/ProgressBar';
import './index.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [success, setSuccess] = useState(false);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const updateFormData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="app-container">
      <div className="form-wrapper">
        <h1 className="form-title">Register</h1>
        <ProgressBar step={step} />
        {!success ? (
          <>
            {step === 1 && (
              <StepOne nextStep={nextStep} formData={formData} updateFormData={updateFormData} />
            )}
            {step === 2 && (
              <StepTwo
                prevStep={prevStep}
                formData={formData}
                updateFormData={updateFormData}
                setSuccess={setSuccess}
              />
            )}
          </>
        ) : (
          <Success />
        )}
      </div>
    </div>
  );
}

export default App;
