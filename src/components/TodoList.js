import React from 'react';

const TodoList = ({todos, setTodos, setEditTodo}) => {

const handleDelete=({id})=>{
    console.log(id);
 setTodos(todos.filter((todo)=>todo.id !== id));
 };

 const handleEdit=({id})=>{
const findTodo= todos.find((todo)=>todo.id===id);
setEditTodo(findTodo);
 }

 



  return (
    <div>
      {todos.map((todo)=>(
       <li key={todo.id}>
        <input 
        type="text"
        value={todo.title}
        onChange={(event) => event.preventDefault()}
        />

        <div><button onClick={()=>handleEdit(todo)}> Edit</button></div>

        <div><button onClick={()=>handleDelete(todo)} > Delete</button></div>
       </li>
      ))}
    </div>
    );
};

export default TodoList;
