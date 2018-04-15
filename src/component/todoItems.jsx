import React from 'react'
import '../component-css/todo.css';

export default class TodoItems extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      item:[]
    }

    this.createTasks = this.createTasks.bind(this);

  }

  delete(key){
    this.props.delete(key);
  }

  like(key){
    this.props.like(key);
  }



  createTasks(item) {
    return <li class='todo' key={item.key}>
             <p class="title">{item.text}</p>
             <p class="description">{item.description}</p>
             <ul className="rightPart">
               <button onClick={() => this.delete(item.key)}></button>
               <button onClick={() => this.like(item.key)}></button>
             </ul>
           </li>
  }




  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <div className="listForm">
        <ul className="theList">
          <h1>TODO List</h1>
            {listItems}
        </ul>
      </div>
    );
  }
};
