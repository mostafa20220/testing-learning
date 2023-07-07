
// jest.mock('./http.js');

const {printTitle,loadTitle} = require('./util');

// test async printTitle 

test("should print an uppercase text",async()=>{
  expect(await printTitle()).toBe("DELECTUS AUT AUTEM");
})

test("should print an uppercase text", ()=>{
   printTitle().then((title) => {
    expect(title).toBe('DELECTUS AUT AUTEM');
   }) })



// test loadTitle

test("should print an uppercase text",()=>
  loadTitle().then(title=>expect(title).toBe('DELECTUS AUT AUTEM')));