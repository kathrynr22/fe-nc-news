import React, { Component } from "react";
import CommentCard from "./CommentCard";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";
import * as api from "../Utils/api";
import CommentAdder from "./CommentAdder";

class CommentsList extends Component {
  state = {
    commentsByArticleId: [],
    isLoading: true,
    err: "",
  };
  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;

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
    api
      .getComments(article_id)
      .then((commentsByArticleId) => {
        this.setState({ commentsByArticleId, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
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
    api.deleteCommentByCommentId(comment_id).then(() => {
      this.setState((currentState) => {
        const newCommentsByArticleId = currentState.commentsByArticleId.filter(
          (comment) => {
            return comment_id !== comment.comment_id;
          }
        );
        return { commentsByArticleId: newCommentsByArticleId };
      });
    });
  };
}

export default CommentsList;
