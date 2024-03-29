import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [res, setRes] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setRes(json))
      .catch((error) => console.error(error));
  }, [input]);

  return (
    <div className="App">
      <input name="location" onChange={(e) => setInput(e.target.value)} />
      {res.map((ele) => (
        <div>{ele.id}</div>
      ))}
    </div>
  );
}

export default App;
