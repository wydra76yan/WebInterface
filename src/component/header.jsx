import React from 'react'
import '../component-css/header.css';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Create new TODO</h1>
        <input type='input' value='Text'></input>
        <input type='input' value='Description'></input>
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
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return(
      <header class="header">
        <p class="title"> TODO App </p>
        <button class="addNew" onClick={this.togglePopup.bind(this)}> Add new TODO item </button>
          {this.state.showPopup
            ?
            <Popup saveTodo={this.togglePopup.bind(this)}/>
            : null
          }
      </header>

    );
  }
}
