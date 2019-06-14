import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Modal from "./components/Modal";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
