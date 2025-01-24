import React from "react"; 
import "./index.css";
import Home from "./Routers_folder/Home";
import About from "./Routers_folder/About";
import Contact from "./Routers_folder/Contact";
import { Route, Routes } from "react-router-dom";
import Stories from "./Routers_folder/Stories";
import Quotes from "./Routers_folder/Quotes";
import Signup from "./Routers_folder/Signup";
import Login from "./Routers_folder/Login";
import Photography from "./Routers_folder/Photography";
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute

function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Stories" element={<ProtectedRoute element={<Stories />} />} />
          <Route path="/Quotes" element={<ProtectedRoute element={<Quotes />} />} />
          <Route path="/Photography" element={<ProtectedRoute element={<Photography />} />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
