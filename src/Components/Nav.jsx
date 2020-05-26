import React, { Component } from "react";
import { Link } from "@reach/router";

class Nav extends Component {
  state = {
    topics: [
      {
        slug: "coding",
        description: "Code is love, code is life",
      },
      {
        slug: "football",
        description: "FOOTIE!",
      },
      {
        slug: "cooking",
        description: "Hey good looking, what you got cooking?",
      },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.topics.map((topic) => {
          //topic.slug.charAt(0).toUpperCase();
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
}

export default Nav;
