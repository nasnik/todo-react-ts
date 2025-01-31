import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoListItem.module.css';

const TodoListItem = ({ item, removeTodo }) => {
    return (
        <li className={style.ListItem}>
            {item.title}
            <button onClick={() => removeTodo(item.id)}>Remove</button>
        </li>
    );
};

TodoListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    removeTodo: PropTypes.func.isRequired,
};

export default TodoListItem;