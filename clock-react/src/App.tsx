import DigitalClock from "./DigitalClock.tsx";
function App() {
  return (
    <>
      <div className="clock-row">
        <DigitalClock
          label="Malaysia (Kuala Lumpur)"
          timeZone="Asia/Kuala_Lumpur"
        />
        <DigitalClock
          label="Pacific (Los Angeles)"
          timeZone="America/Los_Angeles"
        />
        <DigitalClock label="UTC / London" timeZone="UTC" />
      </div>
    </>
  );
}

export default App;
