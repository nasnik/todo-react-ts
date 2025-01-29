import React, {useState} from 'react';
import styles from './AddTodoForm.module.css';
import {AddTodoFormProps} from "./types.ts";
import InputWithLabel from "./InputWithLabel.tsx";

const AddTodoForm = ({addTodo}: AddTodoFormProps) => {
    const [todoTitle, setTodoTitle] = useState<string>('')

    const  handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo({id: Date.now(), title: todoTitle});
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

export default AddTodoForm;