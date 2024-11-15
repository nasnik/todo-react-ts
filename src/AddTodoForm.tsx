import React from 'react';
interface AddTodoFormProps {
    onAddTodo: (title: string) => void;
}
const AddTodoForm = ({onAddTodo}: AddTodoFormProps) => {
    const handleAddTodo = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputField = e.currentTarget.elements.namedItem("title") as HTMLInputElement;
        const inputValue = inputField.value;
        console.log(inputValue);
        onAddTodo(inputValue);
        inputField.value = '';
    };
    return (
        <form role="form" id="addTodoTitleForm" onSubmit={handleAddTodo}>
            <label htmlFor="addTodoTitle">Title</label>
            <input id="addTodoTitle" name="title" type="text" />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;