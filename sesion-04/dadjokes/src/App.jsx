import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [type, setType] = useState("joke");
  const [icon, setIcon] = useState("");

  const getNewJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://icanhazdajoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setText(data.joke);
      setType("joke");
    } catch (error) {
      setError("There was an error fetching the joke, try again please.");
    } finally {
      setLoading(false);
    }
  };

  const getQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        " https://quote-garden.onrender.com/api/v3/quotes/random"
      );
      const data = await response.json();
      setText(data.data[0].quoteText);
      setType("quote");
    } catch (error) {
      setError("There was an error fetching the quote, try again please.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  useEffect(() => {
    if (type === "joke") {
      setIcon("🤣");
    } else {
      setIcon("📜");
    }
  }, [type]);

  return (
    <>
      <h1>Dad Jokes / Quotes</h1>
      <div className="card">
        <div className="buttons">
          <button onClick={getNewJoke}>Get Joke</button>
          <button onClick={getQuote}>Get Quote</button>
        </div>
        {loading ? (
          <p className="text">Loading...</p>
        ) : (
          <p
            className="text"
            style={
              type === "joke" ? { color: "#61dafb" } : { color: "#428022" }
            }
          >
            {`${icon} - ${text}`}
          </p>
        )}
        {error ? <p className="error">{error}</p> : null}
      </div>
    </>
  );
}

export default App;
