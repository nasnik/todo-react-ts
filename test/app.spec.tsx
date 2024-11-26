import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App Component', () => {
    beforeEach(() => {
        render(<App />);
    });

    it('renders the main title', () => {
        expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    });

    it('renders the AddTodoForm component', () => {
        expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it('renders the TodoList component with no initial items', () => {
        expect(screen.queryByRole('listitem')).toBeNull();
    });
});
