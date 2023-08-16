import React from 'react';
import { Todo } from './model';
import "./style.css";

interface Props{
  todos : Todo[];
  setTodos : React.Dispatch<React.SetStateAction<Todo[]>>

}

const TodoList : React.FC = (todos,setTodos) => {
  return (
    <div className="todos">we will add todos here 
      
    </div>
  )
}

export default TodoList