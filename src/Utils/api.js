import axios from "axios";

export const getTopics = () => {
  return axios
    .get("https://kathryn-nc-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export const getArticleById = (article_id) => {
  return axios
    .get(`https://kathryn-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { articleById } }) => {
      return articleById;
    });
};

export const getComments = (article_id) => {
  return axios
    .get(
      `https://kathryn-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { commentsByArticleId } }) => {
      return commentsByArticleId;
    });
};

export const getArticles = (topic) => {
  return axios
    .get("https://kathryn-nc-news.herokuapp.com/api/articles", {
      params: {
        topic: topic,
      },
    })
    .then(({ data: { allArticles } }) => {
      return allArticles;
    });
};
