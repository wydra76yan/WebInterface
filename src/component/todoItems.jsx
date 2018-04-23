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
    this.edit = this.edit.bind(this);

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

  setting(key){
    this.props.setting(key);
  }

  edit(key, valueT, valueD){

    if (this._inputTitle.value !== "" ) {
      const valueT = this._inputTitle.value;
      const valueD = this._inputDescription.value;
      console.log(key);
      console.log(valueD);
      this.props.edit(key, valueT, valueD);
       this._inputTitle.value = "";
       this._inputDescription.value = "";
       }
       event.preventDefault();
  }

  addComment(key, value){

    if (this._inputComment.value !== "") {
      const value = this._inputComment.value;
      this.props.addComment(key, value);
      console.log(value);
      console.log(key);
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
                 <i className={`fas fa-edit ${item.setting ? "fa-edit-active" : ""}`}
                   onClick={() => this.setting(item.key)}></i>
              </div>
            </div>

             {item.setting &&
               <div className="popup-background">
                 <div className="settings-form">
                   <div className="edit-form">
                     <h1>Edit</h1>
                     <form className="edit-form__input-form" onSubmit={() => this.edit(item.key)}>
                         <input ref={(a) => this._inputTitle = a}
                           placeholder="new title">
                            </input>
                        <input ref={(b) => this._inputDescription = b}
                          placeholder="new desc">
                           </input>
                  </form>
                  </div>

                   <div className="comments-form">
                  <form className="comments-form__input-form" onSubmit={() => this.addComment(item.key)}>
                    <h1 className="cmnts">Comments</h1>
                    <input ref={(a) => this._inputComment = a}
                         placeholder="Enter comment">
                      </input>
                  </form>
                  <ul className="comments-form__comments-list">
                   {item.comments.map(comment => <li>{comment}</li>)}
                  </ul>
                  </div>

                <button  onClick={() => this.setting(item.key)}> Close </button>
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
