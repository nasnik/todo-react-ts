import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';
jest.useFakeTimers();

describe('App Component', () => {
    beforeEach(() => {
        render(<App />);
        jest.advanceTimersByTime(2000);
    });

    it('renders the main title', async() => {
        await waitFor(() => expect(screen.queryByText(/Loading.../i)).toBeNull());
        expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    });

    it('renders the AddTodoForm component', async() => {
        await waitFor(() => expect(screen.queryByText(/Loading.../i)).toBeNull());
        expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it('renders the TodoList component with no initial items', async() => {
        await waitFor(() => expect(screen.queryByText(/Loading.../i)).toBeNull());
        expect(screen.queryByRole('listitem')).toBeNull();
    });
    it('displays "Loading..." initially', () => {
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('removes "Loading..." and displays the Todo List after 2 seconds', async () => {
        // Fast-forward the timer
        jest.advanceTimersByTime(2000);

        // Wait for the loading state to finish
        await waitFor(() => expect(screen.queryByText(/Loading.../i)).toBeNull());

        // Ensure the Todo List is displayed
        expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    });
});
