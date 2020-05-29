import axios from "axios";
const baseURL = "https://kathryn-nc-news.herokuapp.com/api";
export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const getArticleById = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}`)
    .then(({ data: { articleById } }) => {
      return articleById;
    });
};

export const getComments = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data: { commentsByArticleId } }) => {
      return commentsByArticleId;
    });
};

export const getArticles = (topic, sort_by, order) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic: topic,
        sort_by: sort_by,
      },
    })
    .then(({ data: { allArticles } }) => {
      return allArticles;
    });
};

export const patchArticleVote = (article_id, inc_votes) => {
  return axios
    .patch(`${baseURL}/articles/${article_id}`, {
      inc_votes: inc_votes,
    })
    .then(({ data: { patchedArticle } }) => {
      return patchedArticle;
    });
};

export const patchCommentVote = (comment_id, inc_votes) => {
  return axios
    .patch(`${baseURL}/comments/${comment_id}`, {
      inc_votes: inc_votes,
    })
    .then(({ data: { patchedComment } }) => {
      return patchedComment;
    });
};

export const postComment = (article_id, username, body) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      username,
      body,
    })
    .then(({ data: { postedComment } }) => {
      return postedComment;
    });
};

export const deleteCommentByCommentId = (comment_id) => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};
