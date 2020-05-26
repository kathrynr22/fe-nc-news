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
          {this.state.topics.map((topic) => {
            console.log(topic);
            return (
              <li key={topic.slug}>
                <Link to={`articles/topic/${topic.slug}`}>
                  {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
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
