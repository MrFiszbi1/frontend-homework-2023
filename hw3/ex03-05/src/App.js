import "./styles.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Houses from "./Houses";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/houses" element={<Houses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
