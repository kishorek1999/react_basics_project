import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/hooks">Hooks</Link>
      <Link to="/fetch">Fetch</Link>
      <Link to="/peaks">Peaks</Link>
      <h1> Main App</h1>
    </>
  );
}

export default App;
