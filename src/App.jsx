import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepages from "./pages/home/Homepages";

import "./App.css";
import Header from "./components/heder/Heder";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Header/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/" element={<Homepages/>}/>
      </Routes>
   
    </>
  );
}

export default App;
