import React from 'react'
import '../component-css/content.css';

export default class TodoItems extends React.Component {
  createTasks(item) {
    return <li class='todo' key={item.key}>
             <p>{item.text}</p>
             <p>{item.description}</p>
           </li>
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
