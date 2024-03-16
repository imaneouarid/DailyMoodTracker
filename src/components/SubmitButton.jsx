// SubmitButton.js
import React from 'react';

const SubmitButton = ({ onSubmit }) => {
  return(
   <button onClick={onSubmit}  className= " flex items-center justify-center mx-80  bg-red-300   hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"> Submit </button>
  )
};

export default SubmitButton;
