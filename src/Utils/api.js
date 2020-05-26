import axios from "axios";

export const getTopics = () => {
  return axios
    .get("https://kathryn-nc-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};
