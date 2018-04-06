import React from 'react'
import '../component-css/content.css';


const Todo =({todo, remove, description}) =>{
  return(
    <li class="todo">
      <p>{todo.text}</p>
      <p>{todo.description}</p>
      <div>
        <button>Des</button>
        <button>Del</button>
      </div>
    </li>
  );
}

const TodoList = ({todos, remove, description}) => {
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove} description={description}/>)
  });
  return (<ul class="todoList">{todoNode}</ul>);
}

export default class Content extends React.Component{
  render(){
    return (
      <div class="content">
        <TodoList todos={
            [{id:1, text:'kek', description:'First TODO'},{id:2, text:'lol', description:'Second TODO'}]
          }/>
      </div>
    );
  }
}
