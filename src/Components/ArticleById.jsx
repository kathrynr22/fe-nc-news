import React, { Component } from "react";
import Loader from "./Loader";
import CommentsList from "./CommentsList";
import VoteHandler from "./VoteHandler";
import * as api from "../Utils/api";
import ErrorHandler from "./ErrorHandler";

class ArticleById extends Component {
  state = {
    articleById: {},
    isLoading: true,
    err: "",
  };

  render() {
    const {
      article_id,
      title,
      author,
      body,
      topic,
      votes,
      comment_count,
      created_at,
    } = this.state.articleById;

    const { err, isLoading } = this.state;

    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;

    return (
      <article>
        <h2>Topic: {topic.charAt(0).toUpperCase() + topic.slice(1)}</h2>
        <h2>{title}</h2>
        <h3>
          Id:{article_id} Written by {author} on{" "}
          {new Date(created_at).toLocaleString()}
        </h3>
        <p>{body}</p>
        <VoteHandler votes={votes} article_id={article_id} />{" "}
        <h3>Comment Count: {comment_count}</h3>
        <CommentsList
          article_id={this.props.article_id}
          username={this.props.username}
        />
      </article>
    );
  }

  componentDidMount() {
    this.getArticleById();
  }

  getArticleById = () => {
    const article_id = this.props.article_id;
    api
      .getArticleById(article_id)
      .then((articleById) => {
        this.setState({ articleById, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
}

export default ArticleById;
