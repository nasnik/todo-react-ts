import React from 'react';
import {TodoListItemProps} from "./types.ts";

const TodoListItem: React.FC<TodoListItemProps> = ({item, removeTodo}) => {
    return (
        <li>{item.title}&nbsp;<button onClick={()=>removeTodo(item.id)}>Remove</button></li>
    );
};

export default TodoListItem;