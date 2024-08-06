import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ border: '15px black', fontSize: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',borderRadius:'50px' }}>
      {time.getHours()} Hours:{time.getMinutes()} Minutes:{time.getSeconds()} Seconds
    </div>
  );
}

export default Clock;
