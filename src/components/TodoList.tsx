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

    <div className="container">
      <div className="todos">
        <span className="todos_heading">
          Active Tasks
        </span>
          {
            todos.map((todo)=>
           <SingleTodo  todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
            )
          }

      </div>
      <div className="todos remove">
      <span className="todos_heading">
          Completed Tasks
      </span>
          {
            todos.map((todo)=>
           <SingleTodo  todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
            )
          }
          </div>
    </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
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