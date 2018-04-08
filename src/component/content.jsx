import React from 'react'
import '../component-css/content.css';
//import Popup from './header.jsx';
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




export default class Content extends React.Component{

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     items: []
  //   };
  //
  //   //this.addItem = this.addItem.bind(this);
  // }

  render(){
    return (
      <div class="content">
        <TodoList/>
      </div>
    )
  }
}
