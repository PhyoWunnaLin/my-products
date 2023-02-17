import React from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Products from "./Products";

const App = () => {

  return (
    <div className="bg-light">
      <div className="container">
      <Navbar/>
      <Products/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
