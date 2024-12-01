import React, {useState} from 'react';
import {AddTodoFormProps} from "./types.ts";

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
            <label htmlFor="addTodoTitle">Title</label>
            <input id="addTodoTitle" name="title" type="text" value={todoTitle} onChange={handleTitleChange}/>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;