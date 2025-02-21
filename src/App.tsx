import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import TodoList from "./components/TodoList.tsx";
import AddTodoForm from "./components/AddTodoForm.tsx";
import { Todo } from "./types.ts";
import { addTodoToAPI, fetchTodos } from "./utils/api.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BalloonContainer from "./components/BalloonContainer.tsx";
import Pagination from "./components/Pagination.tsx";
import Sorting from "./components/Sorting.tsx";

function App() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAscending, setIsAscending] = useState(false);
    const [sortMode, setSortMode] = useState<'alphabetic' | 'time'>('time');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

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

            // Update the todoList and sort it based on the current sorting mode and order
            setTodoList((prevTodoList) => {
                const updatedList = [...prevTodoList, addedTodo];

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

    const removeTodo = (id: number) => {
        setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
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
                        path="/"
                        element={
                            <BalloonContainer>
                                <div className={styles.Container} id="balloon-container">
                                <h1 className={styles.Title}>Todo List</h1>
                                <AddTodoForm addTodo={addTodo} />
                                    <Sorting
                                        sortMode={sortMode}
                                        isAscending={isAscending}
                                        onSortModeChange={setSortMode}
                                        onToggleAscending={() => setIsAscending((prev) => !prev)}
                                    />
                                <TodoList todoList={currentTodos} removeTodo={removeTodo} />
                                    <Pagination
                                        totalItems={todoList.length}
                                        itemsPerPage={itemsPerPage}
                                        currentPage={currentPage}
                                        onPageChange={setCurrentPage}
                                    />
                                </div>
                            </BalloonContainer>
                        }
                    />
                    <Route path="/new" element={<h1>New Todo List</h1>} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default App;