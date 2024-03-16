// MoodSelector.js
import React, { useState } from 'react';


const MoodSelection = ({ onSelect }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSelectMood = (mood) => {
    setSelectedMood(mood);
    onSelect(mood);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
    <h1 className="text-3xl font-bold text-gray-500">Choose your mood</h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSelectMood('happy')}>
      😊 Happy
    </button>
    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSelectMood('sad')}>
      😢 Sad
    </button>
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSelectMood('angry')}>
      😠 Angry
    </button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSelectMood('excited')}>
      😃 Excited
    </button>
    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSelectMood('relaxed')}>
      😌 Relaxed
    </button>
  </div>
  );
};

export default MoodSelection;
