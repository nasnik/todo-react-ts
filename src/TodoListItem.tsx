import React from 'react';
import {TodoListItemProps} from "./types.ts";
import style from './TodoListItem.module.css';

const TodoListItem: React.FC<TodoListItemProps> = ({item, removeTodo}) => {
    return (
        <li className={style.ListItem}>{item.title}<button onClick={()=>removeTodo(item.id)}>Remove</button></li>
    );
};

export default TodoListItem;