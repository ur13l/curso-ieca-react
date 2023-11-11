import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen min-w-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className="w-full flex justify-center">
          <div className="container flex text-white p-4">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
