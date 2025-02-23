import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem.tsx';

const TodoList = ({ todoList, removeTodo, checkTask, editTask, saveTask, editToggle, editInput, handleEditInput }) => {
    return (
        <ul>
            {todoList.map(item => (
                <TodoListItem
                    key={item.id}
                    item={item}
                    removeTodo={removeTodo}
                    checkTask={checkTask}
                    editTask={editTask}
                    saveTask={saveTask}
                    editToggle={editToggle}
                    handleEditInput={handleEditInput}
                    editInput={editInput}
                />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    removeTodo: PropTypes.func.isRequired,
    checkTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    saveTask: PropTypes.func.isRequired,
};

export default TodoList;
