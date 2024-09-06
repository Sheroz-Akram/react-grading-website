import "./App.css";
import GradeInput from "./Components/GradeInput";
import Header from "./Components/Header";

function App() {
  return (
    <div className="container mx-auto dark:bg-gray-900">
      <Header />
      <GradeInput />
    </div>
  );
}

export default App;
