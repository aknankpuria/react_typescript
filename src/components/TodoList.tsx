import React from 'react';
import { Todo } from './model';
import "./style.css";
import SingleTodo from './SingleTodo';

interface Props{
  todos : Todo[];
  setTodos : React.Dispatch<React.SetStateAction<Todo[]>>

}

const TodoList: React.FC<Props> = ({todos,setTodos}:Props) => {
  return (
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    // this is older code before implimenting drag and drop
    {// <div className="todos">
    
    
      /* {todos.map((todo)=> (

    <SingleTodo todo={todo} key = {todo.id}
        todos={todos}
        setTodos={setTodos}
        />
      ))} *
    /* </div> */}
  )
}

export default TodoList