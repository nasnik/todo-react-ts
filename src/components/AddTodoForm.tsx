import React, { useState } from 'react';
import styles from './AddTodoForm.module.css';
import PropTypes from 'prop-types';
import InputWithLabel from './InputWithLabel.tsx';

const AddTodoForm = ({ addTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (e) => {
        setTodoTitle(e.target.value);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo({ id: Date.now(), title: todoTitle });
        setTodoTitle('');
    };

    return (
        <form role="form" id="addTodoTitleForm" onSubmit={handleAddTodo} className={styles.AddTodoForm}>
            <InputWithLabel handleTitleChange={handleTitleChange} todoTitle={todoTitle}>
                <span className="form-label">Title</span>
            </InputWithLabel>
            <button type="submit" className={styles.Button}>Add</button>
        </form>
    );
};

AddTodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;