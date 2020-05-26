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
    axios
      .get("https://kathryn-nc-news.herokuapp.com/api/articles")
      .then(({ data: { allArticles } }) => {
        //console.log(response.data);
        this.setState({ allArticles, isLoading: false });
      });
  };
}

export default ArticlesList;
