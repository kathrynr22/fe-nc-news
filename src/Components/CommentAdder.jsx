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

    const username = this.props.username;

    const body = this.state.body;

    const article_id = this.props.article_id;

    api.postComment(article_id, username, body).then((postedComment) => {
      this.props.addCommentToState(postedComment);
      this.setState({ username: "", body: "" });
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
