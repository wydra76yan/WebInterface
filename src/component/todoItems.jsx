import React from 'react'
import '../component-css/todo.css';
import FlipMove from "react-flip-move";

export default class TodoItems extends React.Component {

  constructor(props){
    super(props);

  this.state = {
      item:{}
  }

    this.createTasks = this.createTasks.bind(this);
    this.addComment = this.addComment.bind(this);

  }

  delete(key){
    this.props.delete(key);
  }

  like(key){
    this.props.like(key);
  }

  complete(key){
    this.props.complete(key);
  }

  isComment(key){
    this.props.isComment(key);
  }


  addComment(key, value){
    //this.props.addComment(key, value);

    if (this._inputComment.value !== "") {
      const value = this._inputComment.value;
      this.props.addComment(key, value);
      console.log(value);
      console.log(key);


      // this.setState(({comments}) => {
      //     comments[this._inputComment.value]
      // });
        this._inputComment.value = "";
       }
       event.preventDefault();
  }

  createTasks(item) {

    // const comEntries = this.props.addComment;
    // const comList = comEntries.map(this.addComment)

    return <div className='todo-item' data-empty-message="No TODOs" key={item.key}>
            <div className="todo-item__top-todo-section">
               <div className="todo-item__top-left-todo-section">
                 <p class="todo-item__title">{item.text}</p>
                 <p class="todo-item__description">{item.description}</p>
               </div>
               <div className="todo-item__top-right-todo-section">
                 <i className="fas fa-times" onClick={() => this.delete(item.key)}></i>
                 <span className="todo-item__like">
                   {item.isLiked ? (
                     <i className="fas fa-thumbs-up" onClick={() => this.like(item.key)}/>)
                       : (
                         <i className="fas fa-thumbs-down" onClick={() => this.like(item.key)}/>
                       )}
                 </span>
                 <i className={`fas fa-check ${item.completed ? "fa-check-active" : ""}`}
                   onClick={() => this.complete(item.key)}></i>
                 <span className="todo-item__is-commenting">
                     {item.commenting ? (
                       <i className="fas fa-arrow-up" onClick={() => this.isComment(item.key)}/>)
                         : (
                           <i className="fas fa-arrow-down" onClick={() => this.isComment(item.key)}/>
                         )}
                 </span>
              </div>
            </div>

             {item.commenting &&
               <div className="comments-form">
                 <div className="comments-form__top-comments-section">
               <h1>Comments</h1>
                <form className="comments-form__input-form" onSubmit={() => this.addComment(item.key, item.value)}>
                  <input ref={(a) => this._inputComment = a}
                       placeholder="Enter comment">
                    </input>
                  <button className="fa fa-plus" type="submit"></button>
                </form>
                </div>
                <div>
                  <ul className="comments-form__comments-list">
                   {item.comments.map(comment => <li>{comment}</li>)}
                  </ul>
                </div>
             </div>}

           </div>
  }




  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <div className="todo-list-form" >
        <h1>TODO List</h1>
        <ul className="todo-item-list" >
          <FlipMove duration={250} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>
      </div>
    );
  }
};
