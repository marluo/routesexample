import logo from "./logo.svg";
import "./App.css";
import { Routes, Link, Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Linda from "./components/Linda";
import Film from "./components/Film";

function App() {
  const [movies, setMovies] = [];

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/linda" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/home" style={{ padding: 5 }}>
          Linda
        </Link>
        <Link to="/film/Titanic" style={{ padding: 5 }}>
          Titanic
        </Link>
        <Link to="/film/Rambo" style={{ padding: 5 }}>
          Rambo
        </Link>
      </nav>
      <div>Lidna</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Linda" element={<Linda />} />
        <Route path="/film/:id" element={<Film movies={movies} />} />
      </Routes>
    </>
  );
}

export default App;
