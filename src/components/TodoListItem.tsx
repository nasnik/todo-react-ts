import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoListItem.module.css';

const TodoListItem = ({ item, removeTodo, checkTask, editTask, saveTask, editToggle, editInput, handleEditInput }) => {

    return (
        <li className={style.ListItem}>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => checkTask(item.id)}
                className={style.CustomCheckbox}
            />
            {editToggle === item.id ? (
                <>
                    <input
                        type="text"
                        value={editInput}
                        onChange={handleEditInput}
                        autoFocus
                    />
                    <div className={style.Buttons}>
                        <button onClick={() => saveTask(item.id)}>Save</button>
                    </div>
                </>
            ) : (
                <>
            <span className={style.TaskTitle} style={{ textDecoration: item.completed ? 'line-through' : '' }}>
                {item.title}
            </span>
                    <div className={style.Buttons}>
                        <button onClick={() => editTask(item.id)}>Edit</button>
                        <button onClick={() => removeTodo(item.id)}>Remove</button>
                    </div>
                </>
            )}
        </li>


    );
};

TodoListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        isEditing: PropTypes.bool.isRequired,
    }).isRequired,
    removeTodo: PropTypes.func.isRequired,
    checkTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    saveTask: PropTypes.func.isRequired,
};

export default TodoListItem;
