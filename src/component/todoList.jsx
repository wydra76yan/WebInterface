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
  }

  addItem(e) {
//  const { items } = this.state;
  if (this._inputText.value !== "" && this._inputDescription.value !== "") {
    var newItem = {
      text: this._inputText.value,
      description: this._inputDescription.value,
      isLiked: false,
      key: Date.now()
    };

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });

    this._inputText.value = "";
    this._inputDescription.value = "";



    e.preventDefault();
  }
}



  likeItem(key){
    console.log(this.state.items);
    var selectedKey = this.state.items.findIndex(item => {
      return (item.key === key);
    });
    this.state.items[selectedKey].isLiked = !this.state.items[selectedKey].isLiked;
    this.setState((prevState)=>{
      prevState.items.splice(selectedKey,1,this.state.items[selectedKey])
      return{
        prevState:[]
      }
    })
  }

  deleteItem(key) {
    console.log(this.state.items);
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    })

  }


  render() {
    return (
      <div className='todosForm'>
        <form className="inputForm" onSubmit={this.addItem}>
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
                     like={this.likeItem}/>
      </div>
    );
  }
}
