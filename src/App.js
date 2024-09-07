import "./App.css";
import GradesInput from "./Components/GradesInput";
import Header from "./Components/Header";

function App() {
  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto flex flex-col items-center">
        <Header />
        <GradesInput />
      </div>
    </div>
  );
}

export default App;
