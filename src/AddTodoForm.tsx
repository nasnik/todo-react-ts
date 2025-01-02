import React, {useState} from 'react';
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
        <form role="form" id="addTodoTitleForm" onSubmit={handleAddTodo}>
            <InputWithLabel handleTitleChange={handleTitleChange} todoTitle={todoTitle}>
                <span className="form-label">Title</span>
            </InputWithLabel>
            <button type="submit" className="add-todo-btn">Add</button>
        </form>
    );
};

export default AddTodoForm;