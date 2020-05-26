import React, { Component } from "react";
import Loader from "./Loader";
import axios from "axios";

class ArticleById extends Component {
  state = {
    articleById: {},
    isLoading: true,
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

    if (this.state.isLoading) return <Loader />;
    return (
      <article>
        <h1>Topic: {topic.charAt(0).toUpperCase() + topic.slice(1)}</h1>
        <h1>{title}</h1>
        <h3>
          Id:{article_id} Written by {author} on {created_at}
        </h3>
        <p>{body}</p>
        <h3>
          Vote Count: {votes} Comment Count: {comment_count}
        </h3>
      </article>
    );
  }

  componentDidMount() {
    this.getArticleById();
  }

  getArticleById = () => {
    //console.log("inside get article");
    //console.log(this.props.article_id);
    const article_id = this.props.article_id;
    axios
      .get(`https://kathryn-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then(({ data: { articleById } }) => {
        // .then((response) => {
        // console.log(response.data.articleById);
        this.setState({ articleById, isLoading: false });
      });
  };
}

export default ArticleById;
