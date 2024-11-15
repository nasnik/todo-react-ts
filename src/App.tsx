import React, {useState} from 'react';
import './App.css'
import TodoList from "./TodoList.tsx";
import AddTodoForm from "./AddTodoForm.tsx";

function App() {
    const [newTodo, setNewTodo] = useState<string>();
    const onAddTodo = (title: string)=> {
        setNewTodo(title);
    }
  return (
    <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={onAddTodo}/>
        <p>{newTodo}</p>
        <TodoList/>
    </>
  )
}

export default App
