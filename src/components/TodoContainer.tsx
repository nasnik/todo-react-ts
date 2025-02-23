import React from 'react';
import styles from "../App.module.css";
import AddTodoForm from "./AddTodoForm.tsx";
import Sorting from "./Sorting.tsx";
import TodoList from "./TodoList.tsx";
import Pagination from "./Pagination.tsx";
import BalloonContainer from "./BalloonContainer.tsx";

const TodoContainer = ({addTodo, sortMode, isAscending, setSortMode, setIsAscending, currentTodos, removeTodo, checkTask, editTask, saveTask, editInput, editToggle, handleEditInput, todoList, itemsPerPage, currentPage, setCurrentPage}) => {
    return (
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
                <TodoList
                    todoList={currentTodos}
                    removeTodo={removeTodo}
                    checkTask={checkTask}
                    editTask={editTask}
                    saveTask={saveTask}
                    editInput={editInput}
                    editToggle={editToggle}
                    handleEditInput={handleEditInput}
                />
                <Pagination
                    totalItems={todoList.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </BalloonContainer>
    );
};

export default TodoContainer;