import React from 'react';

const AddTodoForm = () => {
    return (
        <form role="form">
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle"/>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;