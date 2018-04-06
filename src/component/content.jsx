import React from 'react'
import '../component-css/content.css';


const Todo =({todo,remove,description}) =>{
  return(
    <li class="todo">
      <p>{todo.text}</p>
      <div>
        <button>Des</button>
        <button>Del</button>
      </div>
    </li>
  );
}


export default class Content extends React.Component{
  render(){
    return (
      <div class="content">
        <Todo/>
      </div>
    );
  }
}
