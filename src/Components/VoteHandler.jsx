import React, { Component } from "react";
import * as api from "../Utils/api";

class VoteHandler extends Component {
  state = {
    userVotes: 0,
  };

  handleUpVote = (event) => {
    this.setState(({ userVotes }) => {
      return {
        userVotes: userVotes + 1,
      };
    });

    const { article_id } = this.props;
    api.patchArticleVote(article_id);
  };

  handleDownVote = (event) => {
    this.setState(({ userVotes }) => {
      return {
        userVotes: userVotes - 1,
      };
    });
    const { article_id } = this.props;
    api.patchArticleVote(article_id);
  };

  render() {
    const { userVotes } = this.state;
    const { votes, article_id } = this.props;
    return (
      <>
        <p>Votes: {votes + userVotes} </p>
        <button onClick={this.handleUpVote} disabled={userVotes > 0}>
          <span role="img" aria-label="thumb-up">
            👍
          </span>
        </button>
        <button onClick={this.handleDownVote} disabled={userVotes < 0}>
          <span role="img" aria-label="thumb-down">
            👎
          </span>
        </button>
      </>
    );
  }
}

export default VoteHandler;
