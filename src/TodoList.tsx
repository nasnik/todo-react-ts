import React from 'react';
import TodoListItem from "./TodoListItem.tsx";
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
                <TodoListItem key={item.id} item={item.title}/>
            )}
        </ul>
    );
};

export default TodoList;