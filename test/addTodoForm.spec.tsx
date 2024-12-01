import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../src/AddTodoForm';

describe('AddTodoForm Component', () => {
    const mockAddTodo = jest.fn();

    beforeEach(() => {
        render(<AddTodoForm addTodo={mockAddTodo} />);
    });

    it('renders the input field and submit button', () => {
        expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
    });

    it('calls addTodo with correct data on submit', () => {
        const input = screen.getByLabelText(/Title/i);
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: 'Task Test' } });
        fireEvent.submit(form);

        expect(mockAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            title: 'Task Test',
        });
    });

    it('clears the input field after submitting', () => {
        const input = screen.getByLabelText(/Title/i);
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: 'Clear Test' } });
        fireEvent.submit(form);

        expect(input).toHaveValue('');
    });
});