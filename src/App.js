import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import ArticlesList from "./Components/ArticlesList";
import ArticleById from "./Components/ArticleById";
import { Router } from "@reach/router";
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
        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/articles/topic/:topic" />
          <ArticleById path="/articles/:article_id" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
