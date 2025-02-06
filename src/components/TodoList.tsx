import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem.tsx';

const TodoList = ({ todoList, removeTodo }) => {
    return (
        <ul>
            {todoList.map(item => (
                <TodoListItem key={item.id} item={item} removeTodo={removeTodo} />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    removeTodo: PropTypes.func.isRequired,
};

export default TodoList;