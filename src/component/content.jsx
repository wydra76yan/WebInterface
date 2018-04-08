import React from 'react'
import '../component-css/content.css';
import TodoList from './todoList.jsx';


// const Todo =({todo, remove, description}) =>{
//   return(
//     <li class="todo">
//       <p>{todo.text}</p>
//       <p>{todo.description}</p>
//       <div>
//         <button>Des</button>
//         <button>Del</button>
//       </div>
//     </li>
//   );
// }
//
// addTodo(e){
//   e.preventDefault();
// }
//
// const TodoList = ({todos, remove, description}) => {
//   const todoNode = todos.map((todo) => {
//     return (<Todo todo={todo} key={todo.id} remove={remove} description={description}/>)
//   });
//   return (<ul class="todoList">{todoNode}</ul>);
// }



export default class Content extends React.Component{
  render(){
    return (
      <div class="content">
        <TodoList/>
      </div>
    )
  }
}
