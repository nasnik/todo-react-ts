import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList.tsx';
import AddTodoForm from './AddTodoForm.tsx';
import { Todo } from './types.ts';
import {addTodoToAPI, fetchTodos} from "./utils/api.ts";

function App() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const todos = await fetchTodos();
            setTodoList(todos);
        } catch (error) {
            console.error('Failed to fetch todos:', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const addTodo = async (newTodo: Todo) => {
        try {
            const addedTodo = await addTodoToAPI(newTodo);
            setTodoList((prevTodoList) => [...prevTodoList, addedTodo]);
        } catch (error) {
            console.error('Failed to add todo:', error.message);
        }
    };

    const removeTodo = (id: number) => {
        setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('savedTodoList', JSON.stringify(todoList));
        }
    }, [todoList, isLoading]);

    return isLoading ? (
        <h2>Loading...</h2>
    ) : (
        <React.Fragment>
            <h1>Todo List</h1>
            <AddTodoForm addTodo={addTodo} />
            <TodoList todoList={todoList} removeTodo={removeTodo} />
        </React.Fragment>
    );
}

export default App;