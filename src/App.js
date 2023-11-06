import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About";
import Work from "./Components/Home/Work";
import Testimonial from "./Components/Home/Testimonial";
import Contact from "./Components/Home/Contact";
import Footer from "./Components/Home//Footer";
import React from "react";
import Signin from "./Components/Registration/Signin";


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
      <Signin/>
    </div>
  );
}

export default App;