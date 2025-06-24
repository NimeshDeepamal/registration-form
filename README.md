# Two-Step Registration Form

This is a clean and responsive two-step registration form built using **React**, styled with **custom CSS**, and developed as part of the **Frontend Intern Assessment** for **ZDATA Innovation**.

---

## ✅ Features

- Step-based form navigation
- Step 1: Personal Info (Full Name, Email, Phone)
- Step 2: Security (Password, Confirm Password)
- Dynamic step progress bar
- Inline form validation (required fields, email format, password match)
- Highlight invalid fields with error messages
- API integration using Axios
- Responsive layout using custom CSS (no Tailwind)

---

## 📁 Project Structure

registration-form/
├── .env # API base URL
├── src/
│ ├── index.js # Entry point
│ ├── index.css # Custom CSS styles
│ ├── App.jsx # Main logic & layout
│ ├── components/
│ │ └── ProgressBar.jsx # Progress indicator
│ ├── pages/
│ ├── StepOne.jsx # Personal Info Step
│ ├── StepTwo.jsx # Security Step
│ └── Success.jsx # Success Message


---

## 🌐 API Integration

**POST** request sent to:

/api/register


**Sample Payload:**

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "0771234567",
  "password": "yourpassword"
}

📌 Notes

The project uses only React and plain CSS — no Tailwind, no UI libraries.
Password field enforces a 6-character minimum.
Email and confirm password are strictly validated.
Error messages and UI responses are styled with smooth UX in mind.

👤 Author

Nimesh Deepamal