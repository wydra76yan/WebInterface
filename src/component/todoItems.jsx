import React from 'react'

export default class TodoItems extends React.Component {
  createTasks(item) {
    return <li key={item.key}>
             <ul>{item.text}</ul>
             <ul>{item.description}</ul>
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
