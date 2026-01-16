import DigitalClock from "./DigitalClock.tsx";
function App() {
  return (
    <>
      <DigitalClock label="Malaysia" timeZone="Asia/Kuala_Lumpur" />
      <DigitalClock label="Pacific" timeZone="America/Los_Angeles" />
      <DigitalClock label="UTC" timeZone="UTC" />
    </>
  );
}

export default App;
