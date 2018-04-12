import React from 'react'
import '../component-css/todo.css';

export default class TodoItems extends React.Component {

  constructor(props){
    super(props);

    this.createTasks =this.createTasks.bind(this);
  }

  delete(key){
    this.props.delete(key); 
  }

  createTasks(item) {
    return <li class='todo' onClick={() => this.delete(item.key)} key={item.key}>
             <p class="title">{item.text}</p>
             <p class="description">{item.description}</p>
           </li>
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <h1>TODO List</h1>
          {listItems}
      </ul>
    );
  }
};
