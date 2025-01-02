import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList.tsx';
import AddTodoForm from './AddTodoForm.tsx';
import { Todo } from './types.ts';

function App() {

    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const simulateLoading = (): Promise<{ data: { todoList: Todo[] } }> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const savedTodoList = localStorage.getItem('savedTodoList');
                resolve({
                    data: { todoList: savedTodoList ? JSON.parse(savedTodoList) : [] },
                });
            }, 2000);
        });
    };

    useEffect(() => {
        simulateLoading().then((result) => {
            setTodoList(result.data.todoList);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('savedTodoList', JSON.stringify(todoList));
        }
    }, [todoList, isLoading]);

    const removeTodo = (id: number) => {
        setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
    };

    const addTodo = (newTodo: Todo) => {
        setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    };

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
