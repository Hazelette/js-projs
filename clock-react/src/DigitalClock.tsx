import { useState, useEffect, useMemo } from "react";

type DigitalClockProps = {
  label: string;
  timeZone: string;
};

function DigitalClock({ label, timeZone }: DigitalClockProps) {
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

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat(undefined, {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    [timeZone]
  );

  function formatTime() {
    return formatter.format(time);
  }

  return (
    <>
      <div className="clock-container">
        <div className="clock-label">{label}</div>
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
