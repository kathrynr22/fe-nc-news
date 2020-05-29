import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import ArticlesList from "./Components/ArticlesList";
import ArticleById from "./Components/ArticleById";
import CommentsList from "./Components/CommentsList";
import { Router } from "@reach/router";
import "./App.css";
import ErrorHandler from "./Components/ErrorHandler";

class App extends Component {
  state = { username: "jessjelly" };

  render() {
    const { username } = this.state;
    return (
      <div>
        <Header username={username} />
        <Nav />
        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/articles/topic/:topic" username={username} />
          <ArticleById path="/articles/:article_id" username={username} />
          <CommentsList
            path="/articles/:article_id/comments"
            username={username}
          />
          <ErrorHandler default />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
