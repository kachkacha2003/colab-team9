import EnterPersonalData from "./components/EnterPersonalData";
import PersonalData from "./components/PersonalData";

function App() {
  return (
    <>
      <div className="flex">
        <EnterPersonalData />
        <PersonalData />
      </div>
    </>
  );
}

export default App;
