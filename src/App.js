import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

class App extends Component {
  state = {
    user: "Kathryn",
  };
  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
