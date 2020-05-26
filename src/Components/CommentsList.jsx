import React, { Component } from "react";
import CommentCard from "./CommentCard";
import Loader from "./Loader";
import axios from "axios";

class CommentsList extends Component {
  state = {
    commentsByArticleId: [],
    isLoading: true,
  };
  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <main>
        <ul>
          <h2>Id:{this.props.article_id}</h2>
          {this.state.commentsByArticleId.map((comment) => {
            console.log("inside comment list");
            console.log(comment);
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    //console.log("inside get article");
    //console.log(this.props.article_id);
    const article_id = this.props.article_id;
    axios
      .get(
        `https://kathryn-nc-news.herokuapp.com/api/articles/${article_id}/comments`
      )
      .then(({ data: { commentsByArticleId } }) => {
        // .then((response) => {
        // console.log(response.data.articleById);
        this.setState({ commentsByArticleId, isLoading: false });
      });
  };
}

export default CommentsList;
