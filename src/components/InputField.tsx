import React from 'react';

import './style.css'; 
import { Todo } from './model';

interface Props{
    todo : string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e:React.FormEvent) => void ;
    
}
const InputField:React.FC<Props> = ( { todo , setTodo , handleAdd}) => {
  return (
    <form className="input" >
          <input type="input" onSubmit={ (e)=>handleAdd(e)}
          value= {todo}
          onChange={ (e) => setTodo( e.target.value) } 
          placeholder="Enter a Task " className="input_box" />
          <button className="input_submit" type="submit">Go</button>
           
    </form>
  )
}

export default InputField