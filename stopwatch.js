import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const handleStart = () => {
    if (!running) {
      setRunning(true);
      setStartTime(performance.now());

      const intervalId = setInterval(() => {
        setCount(performance.now() - startTime);
      }, 10); // Update every 10 milliseconds for better precision

      const stop = () => {
        clearInterval(intervalId);
        setRunning(false);
      };

      // Listen for the "stop" button click
      document.addEventListener('keydown', (event) => {
        if (event.key === 's') {
          stop();
        }
      });
    }
  };

  const formatTime = (timeInMilliseconds) => {
    const seconds = Math.floor(timeInMilliseconds / 1000);
    const milliseconds = Math.floor(timeInMilliseconds % 1000);
    return `${seconds}.${milliseconds} s`;
  };

  return (
    <div style={{fontSize:'20px'}}>
      <p>Elapsed time: {formatTime(count)}</p>
      <button onClick={handleStart} disabled={running}>
        Start
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Stopwatch;
