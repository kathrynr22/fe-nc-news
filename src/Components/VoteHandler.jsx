import React, { Component } from "react";
import * as api from "../Utils/api";

class VoteHandler extends Component {
  state = {
    inc_votes: 0,
  };

  handleVoteChange = (event) => {
    this.setState(({ inc_votes }) => {
      return {
        inc_votes: inc_votes + event, // inc_votes is 0 plus 1
      };
    });

    const { article_id, comment_id } = this.props;
    const inc_votes = event;
    if (article_id) {
      return api.patchArticleVote(article_id, inc_votes).catch((err) => {
        this.setState(({ inc_votes }) => {
          return {
            inc_votes: inc_votes - event,
          };
        });
      });
    } else if (comment_id) {
      return api.patchCommentVote(comment_id, inc_votes).catch((err) => {
        this.setState(({ inc_votes }) => {
          return {
            inc_votes: inc_votes - event,
          };
        });
      });
    }
  };

  render() {
    const { inc_votes } = this.state;
    const { votes, article_id, comment_id } = this.props;
    return (
      <>
        <p className="votes">Votes: {votes + inc_votes} </p>
        <button
          className="vote-button"
          onClick={() => this.handleVoteChange(1, article_id, comment_id)}
          disabled={inc_votes > 0}
        >
          <span role="img" aria-label="thumb-up">
            👍
          </span>
        </button>
        <button
          className="vote-button"
          onClick={() => this.handleVoteChange(-1, article_id, comment_id)}
          disabled={inc_votes < 0}
        >
          <span role="img" aria-label="thumb-down">
            👎
          </span>
        </button>
      </>
    );
  }
}

export default VoteHandler;
