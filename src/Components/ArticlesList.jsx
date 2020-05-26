import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../Utils/api";
import Loader from "./Loader";
import SortButton from "./SortButton";
import OrderButton from "./OrderButton";

class ArticlesList extends Component {
  state = {
    allArticles: [],
    isLoading: true,
    sort: "",
    order: "",
  };
  render() {
    console.log(this.props);
    if (this.state.isLoading) return <Loader />;
    return (
      <main>
        <SortButton handleSort={this.handleSort} />
        <OrderButton handleOrder={this.handleOrder} />
        <ul>
          {this.state.allArticles.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </ul>
      </main>
    );
  }

  handleSort = (event) => {
    console.log("inside handle sort");
    console.log(event.target.value);
    this.setState({ sort: event.target.value });
  };

  handleOrder = (event) => {
    console.log("inside handle order");
    console.log(event.target.value);
    this.setState({ order: event.target.value });
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updated");
    //prevState.sort !== this.state.sort
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sort !== this.state.sort
    ) {
      this.getArticles();
    }
  }

  getArticles = () => {
    const topic = this.props.topic;
    const sort_by = this.state.sort;
    console.log("inside getarticles");
    console.log(sort_by);
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
}

export default ArticlesList;
