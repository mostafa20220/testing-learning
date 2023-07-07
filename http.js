const axios = require("axios");

const fetchData = () => {
  console.log('Fetching Data from the server ....');
  return axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.data;
    });
};

exports.fetchData = fetchData;
