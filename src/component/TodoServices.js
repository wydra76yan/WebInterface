function findItem(index, list){
    return list.findIndex(item => item.key === index);
}

function addItem(title, description, todoList){
  const newItem = {
    text: title,
    description: description,
    isLiked: false,
    completed: false,
    setting: false,
    key: Date.now(),
    comments:[]
  };
  const items = todoList.concat(newItem);
  return items;
}

function completeItem(key, todoList){
    const itemIndex = findItem(key, todoList)
    const selectedKey = todoList[itemIndex]
    selectedKey.completed = !selectedKey.completed;
  }

function likeItem (key, todoList){

    const itemIndex = findItem(key, todoList)
    const selectedKey = todoList[itemIndex]
    return selectedKey.isLiked = !selectedKey.isLiked;
  }

function commentItem(key, value, todoList) {
    const itemIndex = findItem(key, todoList)
    const selectedKey = todoList[itemIndex]
    selectedKey.comments = [...selectedKey.comments, value]
  }


function settingItem(key, todoList){
    const itemIndex = findItem(key, todoList)
    const selectedKey = todoList[itemIndex]
    selectedKey.setting = !selectedKey.setting;
  }

function editItem(key, valueT, valueD, todoList) {
    const itemIndex = findItem(key, todoList)
    const selectedKey = todoList[itemIndex]
    selectedKey.text = valueT;
    selectedKey.description = valueD;
  }

function deleteItem(key, list) {
   const filteredItems = list.filter(item => {
    return (item.key !== key);
  });
   return filteredItems;
}


  module.exports = {likeItem, findItem, completeItem, commentItem, settingItem, editItem, deleteItem, addItem}
