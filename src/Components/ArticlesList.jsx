import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import Loader from "./Loader";

class ArticlesList extends Component {
  state = {
    allArticles: [],
    isLoading: true,
  };
  render() {
    console.log(this.props);
    if (this.state.isLoading) return <Loader />;
    return (
      <main>
        <ul>
          {this.state.allArticles.map((article) => {
            return (
              <li key={article.article_id}>
                <ArticleCard {...article} />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    const { topic } = this.props;
    console.log("inside get articles");
    console.log(this.props);
    axios
      .get("https://kathryn-nc-news.herokuapp.com/api/articles/topic/", {
        params: {
          topic: topic, //articles?topic=${topic}
        },
      })
      .then(({ data: { allArticles } }) => {
        // .then((response) => {
        // console.log(response.data);
        this.setState({ allArticles, isLoading: false });
      });
  };
}

export default ArticlesList;
