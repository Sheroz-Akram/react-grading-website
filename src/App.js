import "./App.css";
import GradeInput from "./Components/GradeInput";
import GradesInput from "./Components/GradesInput";
import Header from "./Components/Header";

function App() {
  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto">
        <Header />
        <GradesInput />
      </div>
    </div>
  );
}

export default App;
