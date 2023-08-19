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

//done buuton function
   const handleDone = (id:number)=> {
    setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone }:todo  ));
   }

//delte function

const handleDelete = (id:number) => { 
  setTodos(todos.filter((todo)=>todo.id !==id));
}

//edit function 

const handleEdit = (id:number) => { }
return (
    <form className="todos_single" action="">

    {
          todo.isDone?(

          <s className="todos_single-text">
            {todo.todo}
          </s>

          ):
          (

          <span className="todos_single-text">
            {todo.todo}
          </span>
          )

      }

          <div>
            <span className="icon"  onClick={()=>handleEdit(todo.id)}> <AiFillEdit/></span>
            <span className="icon"  onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
            <span className="icon"   onClick={ ()=> handleDone(todo.id)}  ><MdDone/></span>

          </div>




    </form>
  )
}

export default SingleTodo