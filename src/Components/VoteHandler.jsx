import React, { Component } from "react";
import * as api from "../Utils/api";

class VoteHandler extends Component {
  state = {
    inc_votes: 0,
  };

  handleUpVote = (event) => {
    this.setState(({ inc_votes }) => {
      return {
        inc_votes: inc_votes + 1,
      };
    });

    const { article_id } = this.props;
    api.patchArticleVote(article_id);
  };

  handleDownVote = (event) => {
    this.setState(({ inc_votes }) => {
      return {
        inc_votes: inc_votes - 1,
      };
    });
    const { article_id } = this.props;
    api.patchArticleVote(article_id);
  };

  render() {
    const { inc_votes } = this.state;
    const { votes, article_id } = this.props;
    return (
      <>
        <p>Votes: {votes + inc_votes} </p>
        <button onClick={this.handleUpVote} disabled={inc_votes > 0}>
          <span role="img" aria-label="thumb-up">
            👍
          </span>
        </button>
        <button onClick={this.handleDownVote} disabled={inc_votes < 0}>
          <span role="img" aria-label="thumb-down">
            👎
          </span>
        </button>
      </>
    );
  }
}

export default VoteHandler;
