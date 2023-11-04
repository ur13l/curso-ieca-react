import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HolaMundo from "./components/HelloWorld";
import { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [routes, setRoutes] = useState([
    {
      path: "/hello-world",
      name: "Hello World",
      component: <HolaMundo />,
    },
    {
      path: "/timer",
      name: "Timer",
      component: <Timer />,
    },
  ]);

  return (
    <Router>
      <div className="min-h-[100vh] min-w-[100vw] bg-slate-200 relative">
        <nav className="absolute top-0 left-0 h-16 bg-green-300 w-full">
          <h1>Talento Tech</h1>
        </nav>
        <aside className="absolute left-0 top-16 bg-gray-900 text-white min-w-[150px] max-w-[150px] min-h-full flex flex-col gap-2">
          {routes.map((route) => (
            <Link to={route.path} key={route.path} className="text-md">
              {route.name}
            </Link>
          ))}
        </aside>
        <main className="pl-[150px] pt-16">
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.path}
                element={route.component}
                key={`route-${route.path}`}
              />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
