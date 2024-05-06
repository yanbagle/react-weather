import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [res, setRes] = useState([]);

  const url = "http://www.omdbapi.com/?i=tt3896198&apikey=9fe1e7a9";

  useEffect(() => {
    if (input.length > 3) {
      fetch(url + `&s=${input}`)
        .then((response) => response.json())
        .then((json) => {
          const { Search } = json;
          if (Search) {
            setRes(Search);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [input]);

  return (
    <div className="App">
      <input name="location" onChange={(e) => setInput(e.target.value)} />
      <section class="results">
        {res.map((r, idx) => {
          return (
            <div class="result-item" key={idx}>
              {r.Title}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
