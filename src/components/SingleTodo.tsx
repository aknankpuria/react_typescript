import React, { useState , useRef, useEffect } from 'react'
import { Todo } from './model';
import "./style.css"
import { AiFillEdit,AiFillDelete} from 'react-icons/ai';
import { MdDone }  from "react-icons/md"
import TodoList from './TodoList';


type Props = {
  index : number;
  todo : Todo;
  todos : Todo[];
  setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ( {todo,todos,setTodos} : Props) => {

//edit
const [edit, setedit] = useState<boolean>(false);
const [editTodo, seteditTodo] = useState<string>(todo.todo);




//done buuton function
   const handleDone = (id:number)=> {
    setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone }:todo  ));
   }

//delte function

const handleDelete = (id:number) => { 
  setTodos(todos.filter((todo)=>todo.id !==id));
}

//edit function 

const handleEdit = (e:React.FormEvent,id:number) => {

  e.preventDefault();
   
  setTodos(todos.map((todo)=>(
    todo.id===id?{ ...todo,todo:editTodo}:todo
  ))),
  setedit(false);
  
 }


 useEffect(() => {
   inputRef.current?.focus

 }, [edit])
 

 //useref 
 const inputRef = useRef<HTMLInputElement>(null)

//
return (
    <form className="todos_single" onSubmit={(e)=>handleEdit(e,todo.id)}>
    {
    
     edit?(
              <input 
              ref={inputRef}
              value={editTodo} onChange={(e) =>seteditTodo(e.target.value)} className='todos_single-text'/>

     ):(


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

     )
   }





    {
          

      }

          <div>
            <span className="icon"  onClick={()=>
             { if(!edit && !todo.isDone){
                setedit(!edit);
              }
              
            }}> <AiFillEdit/></span>



            <span className="icon"  onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
            <span className="icon"   onClick={ ()=> handleDone(todo.id)}  ><MdDone/></span>

          </div>




    </form>
  )
}

export default SingleTodo