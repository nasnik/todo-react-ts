import React from 'react';
import TodoListItem from "./TodoListItem.tsx";
import {TodoListProps} from "./types.ts";



const TodoList: React.FC<TodoListProps> = ({todoList}) => {
        return (
        <ul>
            {todoList.map(item =>
                <TodoListItem key={item.id} item={item.title}/>
            )}
        </ul>
    );
};

export default TodoList;