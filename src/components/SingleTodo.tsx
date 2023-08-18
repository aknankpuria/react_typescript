import React from 'react'
import { Todo } from './model';
import "./style.css"
import { AiFillEdit,AiFillDelete} from 'react-icons/ai';
import { MdDone }  from "react-icons/md"
import TodoList from './TodoList';


type Props = {
  todo : Todo;
  todos : Todo[];
  setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ( {todo,todos,setTodos} : Props) => {


   const handleDone = (id:number)=> {
    setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone }:todo  ))
   }

  return (
    <form className="todos_single" action="">

      {
          todo.isDone?(

          <span className="todos_single-text">
            {todo.todo}
          </span>

          ):
          (
          <s className="todos_single-text">
            {todo.todo}
          </s>

          )

      }

          <div>
            <span className="icon"> <AiFillEdit/></span>
            <span className="icon"><AiFillDelete/></span>
            <span className="icon"   onClick={ ()=> handleDone(todo.id)}  ><MdDone/></span>

          </div>




    </form>
  )
}

export default SingleTodo