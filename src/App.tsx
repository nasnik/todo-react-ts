import React, { useEffect, useState } from "react";
import { Todo } from "./types.ts";
import {addTodoToAPI, deleteTodoFromAPI, fetchTodos, updateTodoInAPI} from "./utils/api.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoContainer from "./components/TodoContainer.tsx";
import HomePage from "./components/HomePage.tsx";

function App() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAscending, setIsAscending] = useState(false);
    const [sortMode, setSortMode] = useState<'alphabetic' | 'time'>('time');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [editToggle, setEditToggle] = useState(null);
    const [editInput, setEditInput] = useState('');

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const todos = await fetchTodos(isAscending, sortMode);
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
            setTodoList((prevTodoList) => {
                const updatedList = [addedTodo, ...prevTodoList];

                // Sorting logic
                return updatedList.sort((a, b) => {
                    if (sortMode === 'alphabetic') {
                        const comparison = a.title.localeCompare(b.title);
                        return isAscending ? comparison : -comparison;
                    } else if (sortMode === 'time') {
                        const comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
                        return isAscending ? comparison : -comparison;
                    }
                    return 0;
                });
            });
        } catch (error) {
            console.error('Failed to add todo:', error.message);
        }
    };

    const removeTodo = async (id: number) => {
        try {
            await deleteTodoFromAPI(id);
            setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };
    const checkTask = async (id: number) => {
        try {
            const taskToUpdate = todoList.find(todo => todo.id === id);
            if (!taskToUpdate) return;

            const updatedTask = await updateTodoInAPI(id, { completed: !taskToUpdate.completed });

            setTodoList((prevTodoList) =>
                prevTodoList.map((task) =>
                    task.id === id ? { ...task, completed: updatedTask.completed } : task
                )
            );
            fetchData();
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };
    const editTask = (id:string) => {
        setEditToggle(id);
    }
    const handleEditInput = (e) => {
        setEditInput(e.target.value);
    }
    const saveTask = async (id: string) => {
        try {
            const updatedTask = await updateTodoInAPI(id, { title: editInput });
            setTodoList((prevTodoList) =>
                prevTodoList.map((task) => (task.id === id ? updatedTask : task))
            );
            setEditToggle(null);
            setEditInput('');
            fetchData();
        } catch (error) {
            console.error('Error saving task:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [isAscending, sortMode]);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('savedTodoList', JSON.stringify(todoList));
        }
    }, [todoList, isLoading]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentTodos = todoList.slice(startIndex, startIndex + itemsPerPage);


    return (
        <BrowserRouter>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <Routes>
                    <Route
                        path="/todo"
                        element={<TodoContainer
                            addTodo={addTodo}
                            sortMode={sortMode}
                            isAscending={isAscending}
                            setSortMode={setSortMode}
                            editInput={editInput}
                            setIsAscending={setIsAscending}
                            setCurrentPage={setCurrentPage}
                            currentTodos={currentTodos}
                            currentPage={currentPage}
                            removeTodo={removeTodo}
                            checkTask={checkTask}
                            editTask={editTask}
                            saveTask={saveTask}
                            editToggle={editToggle}
                            handleEditInput={handleEditInput}
                            todoList={todoList}
                            itemsPerPage={itemsPerPage}
                        />}
                    />
                    <Route path="/" element={<HomePage/>} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default App;