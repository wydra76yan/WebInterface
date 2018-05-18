const {likeItem} = require('./TodoServices.js');
const {findItem} = require('./TodoServices.js');
const {addItem} = require('./TodoServices.js');
const {commentItem} = require('./TodoServices.js');
const {editItem} = require('./TodoServices.js');

let key = 1525687463890;
const todoList =
  [
      {
        text: "title1",
        description: "des1",
        isLiked: true,
        key: 1525687463890,
        comments:[],
      },
      {
        text: "title2",
        description: "des2",
        isLiked: true,
        key: 1525687463893,
        comments:[],
      }
    ]
    const comment = "keklol"
// const commentItem =
//       {
//         text: "title2",
//         description: "des2",
//         isLiked: true,
//         key: 1525687463890,
//       }


test('change "isLiked" on True|False', () => {
  //expect(likeItem(key, todoList));
});

test('findItem must return True', () => {
  expect(findItem(key, todoList)).toBeTruthy();
});

test('key should generate automaticaly, and lenght +1', () => {
  let title = "test1";
  let description = "test2";

  let createdTodo = addItem(title, description, todoList);

  expect(createdTodo.key.toString()).toEqual(expect.any(String));
  expect(createdTodo).toHaveLength(createdTodo.length);
});

test('comments must be string', () => {
  expect(commentItem(key, comment, todoList)).toContain(expect.any(String));
});


// test('addItem must return True', () => {
//   expect(findItem(key, todoList)).toBe(true);
// });
