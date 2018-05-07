import React from 'react'
import '../component-css/todo.css';
import TodoItems from './todoItems.jsx';
import TodoList from "./todoList.jsx";

import {addItem, likeItem, deleteItem} from "./TodoServices.js";

export default class ListContent extends React.Component {

  constructor(props) {
    super(props);

    this.handleAddingItem = this.handleAddingItem.bind(this);

  this.state = {
    items: JSON.parse(localStorage.getItem("items"))
  };
}

  handleLike (key) {
     likeItem(key)
  }

  handleAddingItem (newItem){
    console.log(newItem)

        this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
  }

  handleRemoveTodoElem (key){
      deleteItem (key)
  }

  render() {
    return(
      <div>
        <TodoItems entries={this.state.items}
                   like={this.state.handleLike}
                   delete={this.state.handleRemoveTodoElem}/>
                 <TodoList newItem={this.handleAddingItem}/>
      </div>
    );
  }
}
