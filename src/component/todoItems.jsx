import React from 'react'
import '../component-css/todo.css';

export default class TodoItems extends React.Component {

  constructor(props){
    super(props);

  this.state = {
      item:{
        isLiked:false,
        completed:false,
        comments:[]
      }
  }

    this.createTasks = this.createTasks.bind(this);
    this.addComment = this.addComment.bind(this);

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


  addComment(key, value){
    //this.props.addComment(key, value);

    if (this._inputComment.value !== "") {
      value = this._inputComment.value;
      this.props.addComment(key, value);
      console.log(value);
      console.log(key);
    //  this.setState(({comments}) => ({comments: [...comms,"this._inputComment.value"]}))

      // this.setState(({comments}) => {
      //     comments[this._inputComment.value]
      // });
        this._inputComment.value = "";
       }
  }

  createTasks(item) {

    // const comEntries = this.props.addComment;
    // const comList = comEntries.map(this.addComment)

    return <div className='todo' key={item.key}>
            <div className="topTodoPart">
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
                 onClick={() => this.complete(item.key)}></i>
               </div>
             </div>
             <div className="comments">
               <div className="topComPart">
               <h1>Comments</h1>
                <form className="inputCommentForm" onSubmit={() => this.addComment(item.key)}>
                  <input ref={(a) => this._inputComment = a}
                       placeholder="Enter comment">
                    </input>
                  <button className="fa fa-plus" type="submit"></button>
                </form>
                </div>
                <div>
                  <ul className="theComments">
                   {item.comments.map(comment => <li>{comment}</li>)}
                  </ul>
                </div>
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
