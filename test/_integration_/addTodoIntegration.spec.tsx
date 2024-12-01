import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/App';

describe('App Component - AddTodo Integration', () => {
    beforeEach(() => {
        render(<App />);
    });

    it('should add a new todo item on form submit', () => {
        const input = screen.getByLabelText(/Title/i);
        const button = screen.getByRole('button', { name: /Add/i });

        fireEvent.change(input, { target: { value: 'Learn TypeScript' } });
        fireEvent.click(button);

        expect(screen.getByText('Learn TypeScript')).toBeInTheDocument();
    });

    it('clears the input field after submit', () => {
        const input = screen.getByLabelText(/Title/i);
        const button = screen.getByRole('button', { name: /Add/i });

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(button);

        expect(input).toHaveValue('');
    });
});