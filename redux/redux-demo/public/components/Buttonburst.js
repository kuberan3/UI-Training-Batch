import React, { useState } from 'react';
import './BurstButton.css'; // Import the CSS file for styling

const BurstButton = () => {
  const [isBurst, setIsBurst] = useState(false);

  const handleClick = () => {
    setIsBurst(true);

    // Wait for the animation to complete before resetting the state
    setTimeout(() => {
      setIsBurst(false);
    }, 1000); // Change this value to match the duration of your CSS animation
  };

  return (
    <button className={`burst-button ${isBurst ? 'burst' : ''}`} onClick={handleClick}>
      Delete
    </button>
  );
};

export default BurstButton;
