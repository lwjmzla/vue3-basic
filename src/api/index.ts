import axios from "axios";

const prefix = 'https://www.fastmock.site/mock/82e2cb9651ace05ed2ce9b4b4a8b15f8/demo';
export function getArticleList(data = {}) {
  return axios({
    method: 'post',
    url: prefix + '/getArticleList',
    data
  });
}