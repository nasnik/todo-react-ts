import React from 'react';
import './App.css'
import TodoList from "./TodoList.tsx";
import AddTodoForm from "./AddTodoForm.tsx";

function App() {

  return (
    <>
        <h1>Todo List</h1>
        <AddTodoForm />
        <TodoList/>
    </>
  )
}

export default App
