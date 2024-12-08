import React from 'react';
import TodoListItem from "./TodoListItem.tsx";
import {TodoListProps} from "./types.ts";



const TodoList: React.FC<TodoListProps> = ({todoList, removeTodo}) => {
        return (
        <ul>
            {todoList.map(item =>
                <TodoListItem key={item.id} item={item} removeTodo={removeTodo}/>
            )}
        </ul>
    );
};

export default TodoList;