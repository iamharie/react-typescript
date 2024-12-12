import "./App.css";
import CompOne from "./components/CompOne.tsx";
import Todos from "./components/Todos.tsx";

function App() {
  return (
    <div>
      <Todos items={["hari"]} />
      <CompOne name="hari" />
    </div>
  );
}

export default App;
