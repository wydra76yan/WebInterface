import React from 'react'
import '../component-css/header.css';

// const AddTodo = ({}) => {
//
//   let input;
//
//   return(
//     <div>
//
//     </div>
//   );
// }

export default class Header extends React.Component {
  render() {
    return(
      <header class="header">
        <p class="title"> TODO App </p>
        <button class="addNew"> Add new TODO item </button>
      </header>

    );
  }
}
