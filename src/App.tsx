import React, {useState} from 'react';
import './App.css'
import TodoList from "./TodoList.tsx";
import AddTodoForm from "./AddTodoForm.tsx";
import {Todo} from "./types.ts";


function App() {

    const [todoList, setTodoList] = useState<Todo[]>([]);

    const addTodo = (newTodo: Todo) => {
        setTodoList(prevTodoList => [...prevTodoList, newTodo]);
    }

  return (
    <>
        <h1>Todo List</h1>
        <AddTodoForm addTodo={addTodo}/>

        <TodoList todoList={todoList}/>
    </>
  )
}

export default App
