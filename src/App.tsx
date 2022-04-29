import "./App.css";
import { Counter } from "./components/counter/counter";
import { Dog } from "./components/dog/Dog";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr style={{ margin: "120px 0" }} />
      <Dog />
    </div>
  );
}

export default App;
