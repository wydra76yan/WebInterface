

function findItem(index, list){
    return list.findIndex(item => item.key === index);
}

// function itemSet(index, list){
//     setState((prevState)=>{
//         prevState.splice(index,1,list[index])
//         return{
//           prevState
//         }
//     })
//   }


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


  module.exports = {likeItem, findItem, completeItem}
