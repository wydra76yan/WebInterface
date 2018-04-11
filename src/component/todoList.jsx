import React from 'react';
import TodoItems from './todoItems.jsx';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
  if (this._inputText.value !== "" && this._inputDescription.value !== "") {
    var newItem = {
      text: this._inputText.value,
      description: this._inputDescription.value,
      key: Date.now()
    };

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });

    this._inputText.value = "";
    this._inputDescription.value = "";
  }

  console.log(this.state.items);

  e.preventDefault();
}


  render() {
    return (
        <form className="todoMain" onSubmit={this.addItem}>
          <input ref={(a) => this._inputText = a}
               placeholder="Enter task">
            </input>
          <input ref={(b) => this._inputDescription = b}
               placeholder="Enter description">
            </input>
          <button type="submit">Add</button>
        </form>
    );
  }
}
