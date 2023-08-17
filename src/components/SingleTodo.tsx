import React from 'react'
import { Todo } from './model';
import "./style.css"


type Props = {
  todo : Todo;
  todos : Todo[];
  setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ( {todo,todos,setTodos} : Props) => {
  return (
    <form className="todos_single" action="">

          <span className="todos_single-text">
            {todo.todo}
          </span>




    </form>
  )
}

export default SingleTodo