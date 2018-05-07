import React from 'react';
import TodoItems from './todoItems.jsx';
import '../component-css/content.css';
import {likeItem, completeItem, commentItem, settingItem, editItem, findItem, deleteItem, addItem} from "./TodoServices.js";

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: JSON.parse(localStorage.getItem("items"))
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleLikeItem = this.handleLikeItem.bind(this);
    this.handleCompleteItem = this.handleCompleteItem.bind(this);
    this.handleCommentItem = this.handleCommentItem.bind(this);
    this.handleSettingItem = this.handleSettingItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
  }


  handleAddItem(e) {

  if (this._inputText.value !== "" && this._inputDescription.value !== "") {

    const title = this._inputText.value;
    const description = this._inputDescription.value;

    this.setState( {
        items: addItem(title, description, this.state.items)
    });



    this._inputText.value = "";
    this._inputDescription.value = "";
  }
  e.preventDefault();
}

  itemSet(index){
    this.setState((prevState)=>{
        prevState.items.splice(index,1,this.state.items[index])
        return{
          prevState
        }
    })
  }

  handleCommentItem(key, value) {
    commentItem(key, value, this.state.items)
    const itemIndex = findItem(key, this.state.items)
    return this.itemSet(itemIndex)
  }


  handleSettingItem(key){
    settingItem(key, this.state.items)
    const itemIndex = findItem(key, this.state.items)
    return this.itemSet(itemIndex)
  }

  handleEditItem(key, valueT, valueD) {
    editItem(key, valueT, valueD, this.state.items)
    const itemIndex = findItem(key, this.state.items)
    return this.itemSet(itemIndex)
  }

  handleCompleteItem(key){
    completeItem(key, this.state.items)
    const itemIndex = findItem(key, this.state.items)
    return this.itemSet(itemIndex)
  }

  handleLikeItem(key){
    likeItem(key, this.state.items)
    const itemIndex = findItem(key, this.state.items)
    return this.itemSet(itemIndex)
  }

  handleDeleteItem(key) {
      this.setState({
        items: deleteItem(key, this.state.items)
      })
  }


  render() {
    return (
      <div className='todo-form'>
        <form className="todo-form__input-form" onSubmit={this.handleAddItem}>
          <h1>New TODO Item</h1>
          <input ref={(a) => this._inputText = a}
               placeholder="Enter task">
            </input>
          <input ref={(b) => this._inputDescription = b}
               placeholder="Enter description">
            </input>
          <button type="submit">Add</button>
        </form>
          <TodoItems entries={this.state.items}
                     delete={this.handleDeleteItem}
                     like={this.handleLikeItem}
                     complete={this.handleCompleteItem}
                     addComment={this.handleCommentItem}
                     edit={this.handleEditItem}
                     setting={this.handleSettingItem}
                     />
      </div>
    );
  }
}
