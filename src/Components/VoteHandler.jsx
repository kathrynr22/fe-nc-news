import React, { Component } from "react";

class VoteHandler extends Component {
  state = {
    userVotes: 0,
  };

  render() {
    const { userVotes } = this.state;
    const { votes, article_id } = this.props;
    return (
      <>
        <p>Votes: {votes} </p>
        <button>
          <span role="img" aria-label="thumb-up">
            👍
          </span>
        </button>
        <button>
          <span role="img" aria-label="thumb-down">
            👎
          </span>
        </button>
      </>
    );
  }
}

export default VoteHandler;
