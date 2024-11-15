import React from 'react';
interface TodoListItemProps {
    item: string;
}
const TodoListItem: React.FC<TodoListItemProps> = ({item}) => {
    return (
        <li>{item}</li>
    );
};

export default TodoListItem;