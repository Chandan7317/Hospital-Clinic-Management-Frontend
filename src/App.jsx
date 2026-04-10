import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import AboutPage from "./Pages/about/AboutsPages";
import Denied from "./Pages/Denied/Denied";
import Signup from "./Pages/Signup/Signup";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/abouts" element={<AboutPage />}></Route>
        <Route path="/denied" element={<Denied />}></Route>
        
      </Routes>
    </div>
  );
};

export default App;
