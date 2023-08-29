import React from "react";
import { Todo } from "./model";
import "./style.css";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setcompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setcompletedTodos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodoList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Active Tasks</span>
            {todos.map((todo,index) => (
              <SingleTodo
              index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}

            {provided.placeholder}
          </div>


        )}
      </Droppable>
      <Droppable droppableId="TodoList">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Completed Tasks</span>
            {completedTodos.map((todo,index) => (
              <SingleTodo
              index={index}
                
                todo={todo}
                todos={completedTodos}
                key={todo.id}
                setTodos={setcompletedTodos}
              />
            ))}
             {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

// this is older code before implimenting drag and drop
/* <div className="todos">
    
    
      /* {todos.map((todo)=> (

    <SingleTodo todo={todo} key = {todo.id}
        todos={todos}
        setTodos={setTodos}
        />
      ))} *
    /* </div> */

export default TodoList;
