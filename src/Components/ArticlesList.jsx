import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../Utils/api";
import Loader from "./Loader";
import SortButton from "./SortButton";
import ErrorHandler from "./ErrorHandler";

class ArticlesList extends Component {
  state = {
    allArticles: [],
    isLoading: true,
    sort_by: "",
    err: "",
  };
  render() {
    const { err, isLoading } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;
    return (
      <main>
        <SortButton handleSort={this.handleSort} />
        <ul>
          {this.state.allArticles.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </ul>
      </main>
    );
  }

  handleSort = (event) => {
    this.setState({ sort_by: event.target.value });
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updated");

    if (
      prevProps.topic !== this.props.topic ||
      prevState.sort_by !== this.state.sort_by
    ) {
      this.getArticles();
    }
  }

  getArticles = () => {
    const topic = this.props.topic;
    const sort_by = this.state.sort_by;

    api
      .getArticles(topic, sort_by)
      .then((allArticles) => {
        this.setState({ allArticles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
}

export default ArticlesList;
