import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Utils/api";

class Nav extends Component {
  state = {
    topics: [],
  };
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="home-link">
          <p>Home</p>
        </Link>

        {this.state.topics.map((topic) => {
          return (
            <Link
              to={`articles/topic/${topic.slug}`}
              key={topic.slug}
              className="topic-name"
            >
              <p>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</p>
            </Link>
          );
        })}
      </nav>
    );
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  };
}

export default Nav;
