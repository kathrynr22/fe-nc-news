import React, { Component } from "react";
import axios from "axios";

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
    //const newComment = this.state;
    const username = this.props.username;

    const body = this.state.body;

    const article_id = this.props.article_id;
    //console.log(newComment);
    axios
      //   `https://kathryn-nc-news.herokuapp.com/api/articles/${article_id}/comments`
      .post(
        `https://kathryn-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
        { username, body }
      )
      .then((response) => {
        const postedComment = response.data.postedComment;
        this.props.addCommentToState(postedComment);
        this.setState({ username: "", body: "" });
      })
      .catch((err) => console.log(err));
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
