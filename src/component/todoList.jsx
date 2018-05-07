import React from 'react';
import TodoItems from './todoItems.jsx';
import '../component-css/content.css';
import {likeItem, completeItem, findItem} from "./TodoServices.js";

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: JSON.parse(localStorage.getItem("items"))
    };

    this.addItem = this.addItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleLikeItem = this.handleLikeItem.bind(this);
    this.handleCompleteItem = this.handleCompleteItem.bind(this);
    this.handleCommentItem = this.handleCommentItem.bind(this);
    this.settingItem = this.settingItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
  }


  addItem(e) {
//  const { items } = this.state;
  if (this._inputText.value !== "" && this._inputDescription.value !== "") {
    const newItem = {
      text: this._inputText.value,
      description: this._inputDescription.value,
      isLiked: false,
      completed: false,
      setting: false,
      key: Date.now(),
      comments:[]
    };

        this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });



    this._inputText.value = "";
    this._inputDescription.value = "";
  }
  e.preventDefault();
}

//   findItem(index){
//     return this.state.items.findIndex(item => item.key === index);
// }

  itemSet(index){
    this.setState((prevState)=>{
        prevState.items.splice(index,1,this.state.items[index])
        return{
          prevState
        }
    })
  }

  handleCommentItem(key, value) {
    const itemIndex = this.findItem(key)
    const selectedKey = this.state.items[itemIndex]
    selectedKey.comments = [...selectedKey.comments, value]
    return this.itemSet(itemIndex)
  }


  settingItem(key){
    const itemIndex = this.findItem(key)
    const selectedKey = this.state.items[itemIndex]
    selectedKey.setting = !selectedKey.setting;
    return this.itemSet(itemIndex)
  }

  handleEditItem(key, valueT, valueD) {
    const itemIndex = this.findItem(key)
    const selectedKey = this.state.items[itemIndex]
    selectedKey.text = valueT;
    selectedKey.description = valueD;
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
    const filteredItems = this.state.items.filter(item => {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    })

  }


  render() {
    return (
      <div className='todo-form'>
        <form className="todo-form__input-form" onSubmit={this.addItem}>
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
                     setting={this.settingItem}
                     />
      </div>
    );
  }
}
