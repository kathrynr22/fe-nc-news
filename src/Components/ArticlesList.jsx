import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import Loader from "./Loader";
import SortButton from "./SortButton";

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
    const { topic } = this.props;
    axios
      .get("https://kathryn-nc-news.herokuapp.com/api/articles", {
        params: {
          topic: topic,
        },
      })
      .then(({ data: { allArticles } }) => {
        //.then((response) => {
        // console.log(response.data);
        this.setState({ allArticles, isLoading: false });
      });
  };
}

// getArticles = () => {
//   const { topic } = this.props;
//   //console.log("inside get articles");
//   // console.log(this.props);
//   axios
//     .get("https://kathryn-nc-news.herokuapp.com/api/articles/topic/", {
//       params: {
//         topic: topic, //articles?topic=${topic}
//       },
//     })
//     .then(({ data: { allArticles } }) => {
//       // .then((response) => {
//       // console.log(response.data);
//       this.setState({ allArticles, isLoading: false });
//     });
// };

export default ArticlesList;
