import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    show: false,
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }

  render() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
            <Modal />
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;
