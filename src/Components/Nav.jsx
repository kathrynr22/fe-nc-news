import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Utils/api";

class Nav extends Component {
  //how can i best do this for users as well

  state = {
    topics: [],
  };
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {this.state.topics.map(({ slug, description, topic_slug }) => {
            return (
              <li key={slug}>
                <Link to={`topics/${topic_slug}`}>
                  {slug.charAt(0).toUpperCase() + slug.slice(1)}
                </Link>
              </li>
            );
          })}
        </ul>
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
