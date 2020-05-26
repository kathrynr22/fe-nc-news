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
    sort_by: "",
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
    this.setState({ sort_by: event.target.value });
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

    if (
      prevProps.topic !== this.props.topic ||
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order
    ) {
      this.getArticles();
    }
  }

  getArticles = () => {
    const topic = this.props.topic;
    const sort_by = this.state.sort_by;
    const order = this.state.order;
    console.log("inside getarticles");
    console.log(sort_by);
    console.log(order);
    api.getArticles(topic, sort_by).then((allArticles) => {
      this.setState({ allArticles, isLoading: false });
    });
  };
}

export default ArticlesList;
