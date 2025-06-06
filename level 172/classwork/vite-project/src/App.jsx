import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contactus";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
