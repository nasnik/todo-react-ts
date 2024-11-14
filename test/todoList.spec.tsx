import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../src/TodoList';

describe('TodoList Component', () => {
    beforeEach(() => {
        render(<TodoList />);
    });

    it('renders exactly three list items', () => {
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });

    it('displays "Learn React" todo item', () => {
        expect(screen.getByText('Learn React')).toBeInTheDocument();
    });

    it('displays "Learn NodeJS" todo item', () => {
        expect(screen.getByText('Learn NodeJS')).toBeInTheDocument();
    });

    it('displays "Learn JavaScript" todo item', () => {
        expect(screen.getByText('Learn JavaScript')).toBeInTheDocument();
    });

    it('renders as an unordered list', () => {
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
});
