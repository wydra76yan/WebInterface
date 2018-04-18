import React from 'react';
import TodoItems from './todoItems.jsx';
import '../component-css/content.css';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.likeItem = this.likeItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.commentItem = this.commentItem.bind(this);
    this.isCommentItem = this.isCommentItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.isEditItem = this.isEditItem.bind(this);
  }

  addItem(e) {
//  const { items } = this.state;
  if (this._inputText.value !== "" && this._inputDescription.value !== "") {
    const newItem = {
      text: this._inputText.value,
      description: this._inputDescription.value,
      isLiked: false,
      completed: false,
      commenting: false,
      editing: false,
      key: Date.now(),
      comments:[]
    };

    localStorage.setItem('newItem', JSON.stringify(newItem));

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

  commentItem(key, value) {
    const selectedKey = this.state.items.findIndex(item => {
      return (item.key === key);
    });
    console.log(this.state.items[selectedKey]);

    this.state.items[selectedKey].comments = [...this.state.items[selectedKey].comments, value]

    this.setState((prevState)=>{
        prevState.items.splice(selectedKey,1,this.state.items[selectedKey])
        return{
          prevState
        }
    })

  }

  isCommentItem(key){
    console.log(this.state.items);
    const selectedKey = this.state.items.findIndex(item => {
      return (item.key === key);
    });
    this.state.items[selectedKey].commenting = !this.state.items[selectedKey].commenting;
    this.setState((prevState)=>{
      prevState.items.splice(selectedKey,1,this.state.items[selectedKey])
      return{
        prevState
      }
    })
  }

  isEditItem(key){
    console.log(this.state.items);
    const selectedKey = this.state.items.findIndex(item => {
      return (item.key === key);
    });
    this.state.items[selectedKey].editing = !this.state.items[selectedKey].editing;
    this.setState((prevState)=>{
      prevState.items.splice(selectedKey,1,this.state.items[selectedKey])
      return{
        prevState
      }
    })
  }

  editItem(key, valueT, valueD) {
    const selectedKey = this.state.items.findIndex(item => {
      return (item.key === key);
    });
    console.log(this.state.items[selectedKey]);

    this.state.items[selectedKey].text = valueT;
    this.state.items[selectedKey].description = valueD;

    this.setState((prevState)=>{
        prevState.items.splice(selectedKey,1,this.state.items[selectedKey])
        return{
          prevState
        }
    })

  }

  completeItem(key){
    console.log(this.state.items);
    const selectedKey = this.state.items.findIndex(item => {
      return (item.key === key);
    });
    this.state.items[selectedKey].completed = !this.state.items[selectedKey].completed;
    this.setState((prevState)=>{
      prevState.items.splice(selectedKey,1,this.state.items[selectedKey])
      return{
        prevState
      }
    })
  }

  likeItem(key){
    console.log(this.state.items);
    const selectedKey = this.state.items.findIndex(item => {
      return (item.key === key);
    });
    this.state.items[selectedKey].isLiked = !this.state.items[selectedKey].isLiked;
    this.setState((prevState)=>{
      prevState.items.splice(selectedKey,1,this.state.items[selectedKey])
      return{
        prevState
      }
    })
  }

  deleteItem(key) {
    console.log(this.state.items);
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
                     delete={this.deleteItem}
                     like={this.likeItem}
                     complete={this.completeItem}
                     addComment={this.commentItem}
                     isComment={this.isCommentItem}
                     edit={this.editItem}
                     isEdit={this.isEditItem}
                     />
      </div>
    );
  }
}
