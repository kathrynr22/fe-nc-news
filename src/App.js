import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import ArticlesList from "./Components/ArticlesList";
import "./App.css";

class App extends Component {
  state = {
    user: "Kathryn",
  };
  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <Nav />
        <ArticlesList path="/" />
        <ArticlesList path="/articles/topic/:topic_slug" />
        <Footer />
      </div>
    );
  }
}

export default App;
