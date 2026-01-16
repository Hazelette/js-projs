import { useState, useEffect } from "react";

type DigitalClockProps = {
  label: string;
  timeZone: string;
};

function DigitalClock({ label, timeZone }: DigitalClockProps) {
  const [time, setTime] = useState(new Date());
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      setTick(true);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!tick) return;
    const timeout = setTimeout(() => setTick(false), 150);
    return () => clearTimeout(timeout);
  }, [tick]);

  function getTimeParts() {
    const parts = new Intl.DateTimeFormat(undefined, {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).formatToParts(time);

    const timePart = parts
      .filter((p) => p.type !== "dayPeriod")
      .map((p) => p.value)
      .join("");

    const dayPeriod = parts.find((p) => p.type === "dayPeriod")?.value;

    return { timePart, dayPeriod };
  }

  const { timePart, dayPeriod } = getTimeParts();

  return (
    <div className="clock-container">
      <div className="clock-label">{label}</div>

      <div className={`clock ${tick ? "clock-tick" : ""}`}>
        <span className="clock-time">{timePart}</span>
        <span className="clock-ampm">{dayPeriod}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
