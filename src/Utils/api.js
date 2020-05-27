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

export const getArticles = (topic, sort_by, order) => {
  console.log("inside axios");
  console.log(sort_by);

  return axios
    .get("https://kathryn-nc-news.herokuapp.com/api/articles", {
      params: {
        topic: topic,
        sort_by: sort_by,
      },
    })
    .then(({ data: { allArticles } }) => {
      return allArticles;
    });
};

export const patchArticleVote = (article_id) => {
  return axios.patch(
    `https://kathryn-nc-news.herokuapp.com/api/articles/${article_id}`,
    {
      thumb: 1,
    }
  );
};
