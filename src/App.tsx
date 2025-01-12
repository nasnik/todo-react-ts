import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList.tsx';
import AddTodoForm from './AddTodoForm.tsx';
import { Todo } from './types.ts';
import {addTodoToAPI, fetchTodos} from "./utils/api.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";

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
        <BrowserRouter>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <h1>Todo List</h1>
                                <AddTodoForm addTodo={addTodo} />
                                <TodoList todoList={todoList} removeTodo={removeTodo} />
                            </>
                        }
                    />
                    <Route path="/new"
                    element={
                        <>
                            <h1>New Todo List</h1>
                        </>
                    }/>
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default App;