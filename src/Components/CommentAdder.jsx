import React, { Component } from "react";

import * as api from "../Utils/api";

class CommentAdder extends Component {
  state = {
    username: "",
    body: "",
    err: "",
  };

  handleInputChange = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    const { username } = this.props;

    const { body } = this.state;

    const { article_id } = this.props;

    api
      .postComment(article_id, username, body)
      .then((postedComment) => {
        this.props.addCommentToState(postedComment);
        this.setState({ username: "", body: "" });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  render() {
    const { body } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <textarea
          onChange={this.handleInputChange}
          value={body}
          rows="10"
          cols="40"
          type="text"
          placeholder="type comment here"
          required
        />

        <button>Submit Comment</button>
      </form>
    );
  }
}

export default CommentAdder;
