import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App Component', () => {
    beforeEach(() => {
        render(<App />);
    });

    it('should render the main title', () => {
        expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    });

    it('should render input with title label', () => {
        expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    });

    it('should render a form', () => {
        expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it('should render three list items', () => {
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });

    it('should render add button', () => {
        expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
    });
});