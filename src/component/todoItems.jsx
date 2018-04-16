import React from 'react'
import '../component-css/todo.css';

export default class TodoItems extends React.Component {

  constructor(props){
    super(props);

  this.state = {
      item:{
        isLiked:false,
        completed:false,
        commenting:false,
        comments:[]
      }
  }

    this.createTasks = this.createTasks.bind(this);
    //this.addComment = this.addComment.bind(this);

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

  isCommenting(key){
    this.setState(({commenting}) =>  ({ commenting: !commenting }));
  }

  addComment(key, value){
    console.log(item.comments);
    this.props.addComment(key, value);

    if (this._inputComment.value !== "") {

      this.setState(({comments}) => {
          item.comments[this._inputComment.value]
          value = {comments};
      });
        this._inputComment.value = "";
       }
  }

  createTasks(item) {

    return <div className='todo' key={item.key}>
             <div className=" leftTodoPart">
               <p class="title">{item.text}</p>
               <p class="description">{item.description}</p>
             </div>
             <div className="rightTodoPart">
               <i className="fas fa-times" onClick={() => this.delete(item.key)}></i>
               <span className="likeItem">
                 {item.isLiked ? (
                   <i className="fas fa-thumbs-up" onClick={() => this.like(item.key)}/>)
                     : (
                       <i className="fas fa-thumbs-down" onClick={() => this.like(item.key)}/>
                     )}
               </span>
               <i className={`fas fa-check ${item.completed ? "fa-check-active" : ""}`}
                 onClick={() => this.complete(item.key)}/>
                 <span className="comments">
                     <form className="inputForm" onSubmit={this.addComment}>
                       <input ref={(a) => this._inputComment = a}
                            placeholder="Enter comment">
                         </input>
                       <button type="submit">Add</button>
                     </form>
                 </span>
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
