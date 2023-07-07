
// mocking global defined variable like: axios
// jest use the mock automatically - no need to: "jest.mock(./axios)" //!WRONG 

const get = ()=> 
{
  console.log('using axios mock!!');
  return Promise.resolve({data:{title:'delectus aut autem'}});
}

exports.get = get;