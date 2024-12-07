import React, {useEffect, useState} from 'react';
import './App.css'
import TodoList from "./TodoList.tsx";
import AddTodoForm from "./AddTodoForm.tsx";
import {Todo} from "./types.ts";

const useSemiPersistentState = ():  [Todo[], React.Dispatch<React.SetStateAction<Todo[]>>] => {
    const [todoList, setTodoList] = useState<Todo[]>(() => {
        const savedTodoList = localStorage.getItem('savedTodoList');
        return savedTodoList ? JSON.parse(savedTodoList) : [];
    });
    useEffect(()=> {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }, [todoList])
    return [todoList, setTodoList];
}

function App() {
    const [todoList, setTodoList] = useSemiPersistentState();

    const addTodo = (newTodo: Todo) => {
        setTodoList(prevTodoList => [...prevTodoList, newTodo]);
    }

  return (
    <React.Fragment>
        <h1>Todo List</h1>
        <AddTodoForm addTodo={addTodo}/>

        <TodoList todoList={todoList}/>
    </React.Fragment>
  )
}

export default App
