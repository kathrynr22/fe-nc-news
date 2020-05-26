import React, { Component } from "react";
import CommentCard from "./CommentCard";
import Loader from "./Loader";
import * as api from "../Utils/api";

class CommentsList extends Component {
  state = {
    commentsByArticleId: [],
    isLoading: true,
  };
  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <main>
        <ul>
          <h2>Id:{this.props.article_id}</h2>
          {this.state.commentsByArticleId.map((comment) => {
            console.log("inside comment list");
            console.log(comment);
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    const article_id = this.props.article_id;
    api.getComments(article_id).then((commentsByArticleId) => {
      this.setState({ commentsByArticleId, isLoading: false });
    });
  };
}

export default CommentsList;
