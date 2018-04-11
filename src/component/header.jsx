import React from 'react'
import '../component-css/header.css';
import TodoList from './todoList.jsx';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <h1>Create new TODO</h1>
        <TodoList/>
        <button onClick={this.props.saveTodo}>Save todo</button>
        </div>
      </div>
    );
  }
}


export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }


  render() {
    return(
      <header class="header">
        <h1>TODO App</h1>
      </header>

    );
  }
}
