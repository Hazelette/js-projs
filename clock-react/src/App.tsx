import DigitalClock from "./DigitalClock.tsx";
function App() {
  return (
    <>
      <DigitalClock
        label="Malaysia (Kuala Lumpur)"
        timeZone="Asia/Kuala_Lumpur"
      />
      <DigitalClock
        label="Pacific (Los Angeles)"
        timeZone="America/Los_Angeles"
      />
      <DigitalClock label="UTC / London" timeZone="UTC" />
    </>
  );
}

export default App;
