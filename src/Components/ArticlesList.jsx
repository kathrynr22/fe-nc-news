import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../Utils/api";
import Loader from "./Loader";
import SortButton from "./SortButton";

class ArticlesList extends Component {
  state = {
    allArticles: [],
    isLoading: true,
    sort: "created_at",
  };
  render() {
    console.log(this.props);
    if (this.state.isLoading) return <Loader />;
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

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updated");
    if (prevProps.topic !== this.props.topic) {
      this.getArticles();
    }
  }

  getArticles = () => {
    const topic = this.props.topic;
    const sort_by = this.state.sort;
    api.getArticles(topic, sort_by).then((allArticles) => {
      this.setState({ allArticles, isLoading: false });
    });
  };

  getArticleById = () => {
    const article_id = this.props.article_id;
    api.getArticleById(article_id).then((articleById) => {
      this.setState({ articleById, isLoading: false });
    });
  };

  handleSort = (event) => {
    console.log("inside handle sort");
    console.log(event.target.value);
    this.setState({ sort: event.target.value });
  };
}

export default ArticlesList;
