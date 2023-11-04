import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <BrowserRouter>
      <main>
        <h1>Talento Tech</h1>
        <p>Ejercicios de React</p>
        <Routes>
          <Route path="/hello-world" element={<HelloWorld />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
