import React, { Component } from "react";
import axios from "axios";

class CommentAdder extends Component {
  state = {
    username: "",
    body: "",
  };

  // {
  //   "name": "Ant Medina",
  //   "startingCohort": 1
  // }

  handleInputChange = (event) => {
    console.log("inside input change");
    console.log(event.target.name);
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = (event) => {
    console.log("inside submit");
    console.log(event);
    event.preventDefault();
    const newComment = this.state;
    const article_id = this.props.article_id;
    console.log(newComment);
    axios
      //   `https://kathryn-nc-news.herokuapp.com/api/articles/${article_id}/comments`
      .post(
        `https://kathryn-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
        newComment
      )
      .then((response) => {
        const postedComment = response.data.postedComment;
        this.props.addCommentToState(postedComment);
        this.setState({ username: "", body: "" });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { username, body } = this.state;
    console.log("inside comment adder");
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor="username">Username</label>
        <input
          onChange={this.handleInputChange}
          name="username"
          value={username}
        />
        <label htmlFor="body">Body</label>
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
