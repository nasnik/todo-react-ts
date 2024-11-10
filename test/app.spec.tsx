import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App Component', () => {
    it('renders the header "Todo List"', () => {
        render(<App />);
        const header = screen.getByRole('heading', { name: /todo list/i });
        expect(header).toBeInTheDocument();
    });

    it('renders all to-do items', () => {
        render(<App />);
        const todoItems = ['Learn React', 'Learn NodeJS', 'Learn JavaScript'];
        todoItems.forEach((item) => {
            const listItem = screen.getByText(item);
            expect(listItem).toBeInTheDocument();
        });
    });

    it('renders the correct number of to-do items', () => {
        render(<App />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(3);
    });
});