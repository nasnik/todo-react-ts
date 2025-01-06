import { getEnv } from '../../config';

const { VITE_AIRTABLE_BASE_ID, VITE_TABLE_NAME, VITE_AIRTABLE_API_TOKEN } = getEnv();

const AIRTABLE_API_BASE_URL = `https://api.airtable.com/v0/${VITE_AIRTABLE_BASE_ID}/${VITE_TABLE_NAME}`;

const AIRTABLE_API_HEADERS = {
    Authorization: `Bearer ${VITE_AIRTABLE_API_TOKEN}`,
    'Content-Type': 'application/json',
};

export const apiRequest = async (url: string, method: string = 'GET', body?: object) => {
    const options: RequestInit = {
        method,
        headers: AIRTABLE_API_HEADERS,
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

export const fetchTodos = async () => {
    const data = await apiRequest(AIRTABLE_API_BASE_URL);
    return data.records.map((todo: any) => ({
        id: todo.id,
        title: todo.fields.title,
    }));
};

export const addTodoToAPI = async (newTodo: { title: string }) => {
    const data = await apiRequest(AIRTABLE_API_BASE_URL, 'POST', {
        fields: { title: newTodo.title },
    });
    return {
        id: data.id,
        title: data.fields.title,
    };
};



