import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import {ToastContainer} from "react-toastify";
import "react-toastify/ReactToastify.css";

function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
