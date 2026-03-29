import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import AboutsPages from "./Pages/about/AboutsPages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
