import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../src/TodoList';
import { Todo } from '../src/types';

describe('TodoList Component', () => {
    const mockTodoList: Todo[] = [
        { id: 1, title: 'Learn TypeScript' },
        { id: 2, title: 'Build a Todo App' },
    ];

    beforeEach(() => {
        render(<TodoList todoList={mockTodoList} />);
    });

    it('renders the correct number of list items', () => {
        expect(screen.getAllByRole('listitem')).toHaveLength(mockTodoList.length);
    });

    it('displays all todo items', () => {
        mockTodoList.forEach(todo => {
            expect(screen.getByText(todo.title)).toBeInTheDocument();
        });
    });
});

