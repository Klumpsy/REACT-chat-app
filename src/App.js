import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import  { AuthProvider }  from "../src/contexts/AuthContext"

//Import components
import Login from "./components/Login";
import Chats from "./components/Chats"; 

function App() {
  return (
    <div className="react-chat-app">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/chats" element={<Chats/>}/>
            <Route path="/" element={<Login/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

//https://www.youtube.com/watch?v=Bv9Js3QLOLY
