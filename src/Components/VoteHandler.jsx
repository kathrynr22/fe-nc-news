import React, { Component } from "react";
import * as api from "../Utils/api";

class VoteHandler extends Component {
  state = {
    inc_votes: 0,
  };

  handleUpVote = (event) => {
    this.setState(({ inc_votes }) => {
      console.log("set state");
      console.log(inc_votes);
      console.log(event); // 1
      return {
        inc_votes: inc_votes + 1, // inc_votes is 0 plus 1
      };
    });

    const { article_id, comment_id } = this.props;
    const inc_votes = event;
    if (article_id) {
      return api.patchArticleVote(article_id, inc_votes).catch((err) => {
        this.setState(({ inc_votes }) => {
          return {
            inc_votes: inc_votes - 1,
          };
        });
      });
    } else if (comment_id) {
      return api.patchCommentVote(comment_id, inc_votes).catch((err) => {
        console.log("inside patch comment");
        console.log(err);
        this.setState(({ inc_votes }) => {
          return {
            inc_votes: inc_votes - 1,
          };
        });
      });
    }
  };

  handleDownVote = (event) => {
    this.setState(({ inc_votes }) => {
      return {
        inc_votes: inc_votes - 1,
      };
    });
    const { article_id, comment_id } = this.props;
    const inc_votes = event;
    console.log("hi from down vote");
    console.log(inc_votes);
    if (article_id) {
      return api.patchArticleVote(article_id, inc_votes).catch((err) => {
        this.setState(({ inc_votes }) => {
          return {
            inc_votes: inc_votes + 1,
          };
        });
      });
    } else if (comment_id) {
      return api.patchCommentVote(comment_id, inc_votes).catch((err) => {
        this.setState(({ inc_votes }) => {
          return {
            inc_votes: inc_votes + 1,
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
        <p>Votes: {votes + inc_votes} </p>
        <button
          onClick={() => this.handleUpVote(1, article_id, comment_id)}
          disabled={inc_votes > 0}
        >
          <span role="img" aria-label="thumb-up">
            👍
          </span>
        </button>
        <button
          onClick={() => this.handleDownVote(-1, article_id, comment_id)}
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
