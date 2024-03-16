import React, { useState } from 'react';
import MoodSelection from './components/MoodSelector';
import SubmitButton from './components/SubmitButton';
import ConfirmationMessage from './components/ConfirmationMessage';
import './App.css';

const App = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setConfirmationMessage(`Thank you for submitting your mood: ${selectedMood}`);
  };

  return (
    <div>
      {!submitted ? (
        <div>
          <h1 className='text-3xl font-bold text-slate-700' >DailyMoodTracker</h1>
          <MoodSelection onSelect={handleSelect} />
          <SubmitButton onSubmit={handleSubmit} />
        </div>
      ) : (
        <ConfirmationMessage message={confirmationMessage} />
      )}
    </div>
  );
};

export default App;
