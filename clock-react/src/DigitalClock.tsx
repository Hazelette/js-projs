import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // callback, time

    // when we unmount, clear interval to free resources
    return () => {
      clearInterval(intervalId);
    };
  }, []); // start timer only when we mount, not render so []

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>00:00:00</span>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
