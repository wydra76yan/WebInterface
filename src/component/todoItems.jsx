import React from 'react'
import '../component-css/todo.css';

export default class TodoItems extends React.Component {
  createTasks(item) {
    return <li class='todo' key={item.key}>
             <p class="title">{item.title}</p>
             <p class="description">{item.description}</p>
           </li>
  }

  render() {
    const todoEntries = [{"key":"1","title":"pro","description":"her"},{"key":"2","title":"po","description":"hr"}];
    const listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
