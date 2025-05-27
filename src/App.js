import "./App.css";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import Home from "./Home";

import About from "./About";

import Contact from "./Contact";
// tutorial: https://www.bairesdev.com/blog/react-spa-single-page-application/

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <h1>Single Page Application in React</h1>
        <nav>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <div className="pageContent">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
