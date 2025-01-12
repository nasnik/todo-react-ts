import { getEnv } from '../config';
import { fetchTodos, addTodoToAPI } from '../src/utils/api';

// Mock getEnv to return test environment variables
jest.mock('../config', () => ({
    getEnv: jest.fn(() => ({
        VITE_AIRTABLE_BASE_ID: 'mock_base_id',
        VITE_TABLE_NAME: 'mock_table_name',
        VITE_AIRTABLE_API_TOKEN: 'mock_api_token',
    })),
}));

describe('API Tests', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('fetchTodos should fetch todos successfully', async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce({
                records: [
                    { id: '1', fields: { title: 'Todo 1' } },
                    { id: '2', fields: { title: 'Todo 2' } },
                ],
            }),
        });

        const todos = await fetchTodos();
        expect(todos).toEqual([
            { id: '1', title: 'Todo 1' },
            { id: '2', title: 'Todo 2' },
        ]);
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    test('addTodoToAPI should add a todo successfully', async () => {
        const newTodo = { title: 'New Todo' };

        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce({
                id: '123',
                fields: { title: 'New Todo' },
            }),
        });

        const addedTodo = await addTodoToAPI(newTodo);
        expect(addedTodo).toEqual({ id: '123', title: 'New Todo' });
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});