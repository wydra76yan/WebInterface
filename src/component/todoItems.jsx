import React from 'react'
import '../component-css/todo.css';

export default class TodoItems extends React.Component {

  constructor(props){
    super(props);

  this.state = {
      item:{
        isLiked:false,
        completed:false
      }
  }

    this.createTasks = this.createTasks.bind(this);

  }

  delete(key){
    this.props.delete(key);
  }

  like(key){
    this.props.like(key);
    this.setState(({isLiked}) =>  ({ isLiked: !isLiked }));
  }

  complete(key){
    this.props.complete(key);
    this.setState(({completed}) =>  ({ completed: !completed }));
  }

  createTasks(item) {
    return <div className='todo' key={item.key}>
             <div className=" leftTodoPart">
               <p class="title">{item.text}</p>
               <p class="description">{item.description}</p>
             </div>
             <div className="rightTodoPart">
               <i className="fas fa-times" onClick={() => this.delete(item.key)}></i>
               <span>
                 {item.isLiked ? (
                   <i className="fas fa-thumbs-up" onClick={() => this.like(item.key)}/>)
                     : (
                       <i className="fas fa-thumbs-down" onClick={() => this.like(item.key)}/>
                     )}
               </span>
               <i className={`fas fa-check ${item.completed ? "fa-check-active" : ""}`}
                 onClick={() => this.complete(item.key)}/>
             </div>
           </div>
  }




  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <div className="listForm" placeholder="No TODO's">
        <ul className="theList" >
          <h1>TODO List</h1>
            {listItems}
        </ul>
      </div>
    );
  }
};
