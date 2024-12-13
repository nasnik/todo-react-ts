import React from "react";

export interface Todo {
    id: number;
    title: string;
}

export interface TodoListProps {
    todoList: Todo[];
    removeTodo: (id: number) => void;
}

export interface AddTodoFormProps {
    addTodo: (todo: Todo) => void;
}

export interface InputWithLabelProps {
    children: React.ReactNode;
    todoTitle: string;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TodoListItemProps {
    item: Todo;
    removeTodo: (id: number) => void;
}