import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Verify from './pages/Verify';
import AdminPanel from './components/AdminPanel';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify/:token" element={<Verify />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
        </Routes>
      </Router>
    </>
  )
}

export default App