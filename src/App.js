import React from 'react';
import './App.css';
import FormComponent from './FormComponent';

function App() {
  // Function to handle form submission
  const handleFormSubmit = (formData) => {
    // Handle the form data as needed, e.g., submit it to an API or update state
    console.log('Form data submitted:', formData);
  }

  return (
    <div className="App">
      <h1>Sample Form</h1>
      <FormComponent onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
