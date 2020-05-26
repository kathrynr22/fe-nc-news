import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Utils/api";

class Nav extends Component {
  state = {
    topics: [],
  };
  render() {
    return (
      <ul>
        {this.state.topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <Link to={topic.slug}>
                {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  componentDidMount() {
    this.getTopics();
  }

  // getTopics = () => {
  //   axios
  //     .get("https://kathryn-nc-news.herokuapp.com/api/topics")
  //     .then(({ data: { topics } }) => {
  //       this.setState({ topics });
  //     });
  // };

  getTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  };
}

export default Nav;
