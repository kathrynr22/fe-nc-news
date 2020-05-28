import React, { Component } from "react";
import * as api from "../Utils/api";

class CommentAdder extends Component {
  state = {
    username: "",
    body: "",
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
    //console.log(newComment);
    api.postComment(article_id, username, body).then((postedComment) => {
      this.props.addCommentToState(postedComment);
      this.setState({ username: "", body: "" });
    });
  };

  render() {
    const { body } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor="body">Post a comment</label>
        <input
          onChange={this.handleInputChange}
          name="body"
          type="text"
          value={body}
        />
        <button>Submit Comment</button>
      </form>
    );
  }
}

export default CommentAdder;
