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
      <div className="todoListMain">
          <form onSubmit={this.addItem}>
          <p><input ref={(a) => this._inputText = a}
               placeholder="enter task">
            </input></p>
          <p><input ref={(b) => this._inputDescription = b}
               placeholder="enter description">
            </input></p>
            <button type="submit">add</button>
          </form>
          <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}
