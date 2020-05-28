import React, { Component } from "react";
import CommentCard from "./CommentCard";
import Loader from "./Loader";
import * as api from "../Utils/api";
import CommentAdder from "./CommentAdder";

class CommentsList extends Component {
  state = {
    commentsByArticleId: [],
    isLoading: true,
  };
  render() {
    console.log("inside comments list");
    if (this.state.isLoading) return <Loader />;
    return (
      <main>
        <ul>
          <CommentAdder
            username={this.props.username}
            article_id={this.props.article_id}
            addCommentToState={this.addCommentToState}
          />
          {this.state.commentsByArticleId.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                {...comment}
                username={this.props.username}
                deleteComment={this.deleteComment}
              />
            );
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

  addCommentToState = (newComment) => {
    this.setState((currentState) => {
      return {
        commentsByArticleId: [newComment, ...currentState.commentsByArticleId],
      };
    });
  };

  deleteComment = (comment_id) => {
    console.log("delete button pressed");
    const comments = this.state.commentsByArticleId.filter((comment) => {
      return comment.comment_id !== comment_id;
    });
    this.setState({
      commentsByArticleId: comments,
    });
  };
}

export default CommentsList;
