import { useEffect, useState, useReducer, useRef } from "react";
import { Link } from "react-router-dom";

function Hooks() {
    const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  useEffect( () => {
    console.log(`It's ${emotion} right now`)
  }, [emotion]);

  useEffect( () => {
    console.log(`It's ${secondary} right now`)
  }, [secondary]);

  const txtTitle = useRef();
  const hexColor = useRef();

  const refSubmit = e => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value="";
    hexColor.current.value="";
  };

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const stateSubmit = e => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000");
  };

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/fetch">Fetch</Link>
      <Link to="/peaks">Peaks</Link>
      <div className="App">
        <h1>Current emotion is {emotion}</h1>
        <button onClick={ () => setEmotion("sad")}>Sad</button>
        <button onClick={ () => setEmotion("excited")}>Excited</button>
        <button onClick={ () => setEmotion("happy")}>Happy</button>
        <h2>Current secondary emotion is {secondary}</h2>
        <button onClick={ () => setSecondary("grateful")}>Grateful</button>
        <button onClick={ () => setSecondary("tired")}>Tired</button>
        <br/>
        <br/>
        <input type="checkbox" value={checked} onChange={setChecked}
        />
        <label>{checked ? "Checked" : "not checked"}</label>
        <br /><br />

        <form onSubmit={refSubmit}>
          <input ref={txtTitle} type="text" placeholder="color title..." />
          <input ref={hexColor} type="color" />
          <button>ADD</button>
        </form>

        <form onSubmit={stateSubmit}>
          <input value={title} type="text" placeholder="color title..." onChange={e => setTitle(e.target.value)} />
          <input value={color} type="color" onChange={e => setColor(e.target.value)} />
          <button>ADD</button>
        </form>
      </div>
    </>
  );
}

export default Hooks;