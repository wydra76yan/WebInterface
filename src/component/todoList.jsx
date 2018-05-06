import React from 'react';
import TodoItems from './todoItems.jsx';
import '../component-css/content.css';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: JSON.parse(localStorage.getItem("items"))
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.likeItem = this.likeItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.commentItem = this.commentItem.bind(this);
    this.settingItem = this.settingItem.bind(this);
    this.editItem = this.editItem.bind(this);
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

  findItem(index){
    return this.state.items.findIndex(item => item.key === index);
}

  itemSet(index){
    this.setState((prevState)=>{
        prevState.items.splice(index,1,this.state.items[index])
        return{
          prevState
        }
    })
  }

  commentItem(key, value) {
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

  editItem(key, valueT, valueD) {
    const itemIndex = this.findItem(key)
    const selectedKey = this.state.items[itemIndex]
    selectedKey.text = valueT;
    selectedKey.description = valueD;
    return this.itemSet(itemIndex)

  }

  completeItem(key){
    const itemIndex = this.findItem(key)
    const selectedKey = this.state.items[itemIndex]
    selectedKey.completed = !selectedKey.completed;
    return this.itemSet(itemIndex)
  }

  likeItem(key){
    const itemIndex = this.findItem(key)
    const selectedKey = this.state.items[itemIndex]
    selectedKey.isLiked = !selectedKey.isLiked;
    return this.itemSet(itemIndex)
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    })

  }

/*

1. S.O.L.I.D. JavaScript
2. JavaScript OOP
3. JavaScript Patterns and Best Practises
4. GRASP Patterns
5. React BestPractises
6. Описать шаги приложения текстом, перед тем как писать код
7. Логика
*/

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
                     edit={this.editItem}
                     setting={this.settingItem}
                     />
      </div>
    );
  }
}
