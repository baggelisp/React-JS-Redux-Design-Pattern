import { Routes, Route, Link } from "react-router-dom";
import './styles/main.css';
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Redux Example!</h1>
      <nav>
       <Link to="/">Home </Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
