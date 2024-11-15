import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../src/AddTodoForm';

describe('AddTodoForm Component', () => {
    beforeEach(() => {
        render(<AddTodoForm />);
    });

    it('renders the title input field', () => {
        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    });

    it('renders input field of type text', () => {
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('renders the submit button', () => {
        expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    });

    it('renders a form element', () => {
        expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it('has correct label text', () => {
        expect(screen.getByText(/title/i)).toBeInTheDocument();
    });

    it('has input with correct ID', () => {
        expect(screen.getByRole('textbox')).toHaveAttribute('id', 'addTodoTitle');
    });

    it('has submit button with correct text', () => {
        expect(screen.getByRole('button')).toHaveTextContent('Add');
    });
});