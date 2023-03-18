import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({setInput,input,setTodos,todos,editTodo, setEditTodo}) => {

   const updateTodo=(title,id)=>{
    const newTodo =todos.map((todo)=>
        todo.id === id ? { title, id } : todo
            );
            setTodos(newTodo);
            setEditTodo(""); 
   };


   useEffect(()=>{

    if(editTodo){
        setInput(editTodo.title);
    }
    else{
        setInput("");
    }

   },[setInput, editTodo]);
    

    const onInputChange=(e)=>{
      setInput(e.target.value);
    }

    const onFormSubmit=(e)=>{
       e.preventDefault(); 
       if(!editTodo){
        setTodos([...todos,{id: uuidv4(), title:input}]);
        setInput("");
       }
       else{
        updateTodo(input, editTodo.id);
       }
      
        

    };
  return (
    <form onSubmit={onFormSubmit}>
      <input  value={input} onChange={onInputChange}  placeholder='Write a task' />
      <button disabled={!input}   type="submit">Add</button>
      </form> 
  );
}

export default Form;
