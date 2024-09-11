import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SYLL from "./apps/syll/index";
import WeatherApp from "./apps/weatherApp/index";
import ToDoApp from "./apps/todoApp/index";
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">WeatherApp</Link>
            </li>
            <li>
              <Link to="/syll">SYLL</Link>
            </li>
            <li>
              <Link to="/todoapp">ToDoApp</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/syll" element={<SYLL />} />
          <Route path="/todoapp" element={<ToDoApp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
