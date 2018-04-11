import React from 'react'
import '../component-css/content.css';
import TodoList from './todoList.jsx';
import TodoItems from './todoItems.jsx';

export default class Content extends React.Component{

  render(){
    return (
      <div className='content'>
        <div className='inputForm'>
          <h1>New TODO</h1>
          <TodoList/>
        </div>
        <div className='listForm'>
          <h1>TODO List</h1>
          <TodoItems/>
        </div>
      </div>
    )
  }
}
