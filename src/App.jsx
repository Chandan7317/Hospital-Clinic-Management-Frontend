import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import AboutPage from "./Pages/about/AboutsPages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/abouts" element={<AboutPage/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
