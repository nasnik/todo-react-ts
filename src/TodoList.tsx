import React from 'react';
interface TodoItem{
    id: number;
    title: string;
}
const TodoList = () => {
    const todoList: TodoItem[] = [
        {id: 1, title: 'Learn React'},
        {id: 2, title: 'Learn NodeJS'},
        {id: 3, title: 'Learn JavaScript'}
    ]
    return (
        <ul>
            {todoList.map(item =>
                <li key={item.id}>{item.title}</li>
            )}
        </ul>
    );
};

export default TodoList;