const fetchData = () => {
  console.log('fetching data from mocks ...');
  return Promise.resolve({title:'delectus aut autem'});
};

exports.fetchData = fetchData;
