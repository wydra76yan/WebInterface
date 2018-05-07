const like = require('../component/todoList.jsx')

test('like method should return true', () => {
  likeItem(key);
  expect(likeItem(key)).toBeTruthy();
});
