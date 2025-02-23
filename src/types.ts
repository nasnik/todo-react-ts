import React from "react";

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
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

export type SortToggleProps = {
    isAscending: boolean;
    onToggle: () => void;
};

export interface SortingProps {
    sortMode: 'alphabetic' | 'time';
    isAscending: boolean;
    onSortModeChange: (mode: 'alphabetic' | 'time') => void;
    onToggleAscending: () => void;
}

export interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}