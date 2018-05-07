import React from 'react'
import '../component-css/content.css';
import TodoList from './todoList.jsx';
import ListContent from './listCont.jsx';

export default class Content extends React.Component{

  render(){
    return (
      <div className='content'>
        <TodoList/>
      </div>
    )
  }
}
