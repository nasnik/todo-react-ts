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

export const fetchTodos = async (isAscending: boolean, sortMode: 'alphabetic' | 'time') => {
    try {
        const data = await apiRequest(`${AIRTABLE_API_BASE_URL}?view=Grid%20view`);
        console.log(data);

        const sortedTodos = data.records.sort((a, b) => {
            if (sortMode === 'alphabetic') {
                const titleA = a.fields.title.toLowerCase();
                const titleB = b.fields.title.toLowerCase();
                return isAscending
                    ? titleA.localeCompare(titleB)
                    : titleB.localeCompare(titleA);
            } else if (sortMode === 'time') {
                const dateA = new Date(a.createdTime);
                const dateB = new Date(b.createdTime);
                return isAscending
                    ? dateA.getTime() - dateB.getTime()
                    : dateB.getTime() - dateA.getTime();
            }
            return 0;
        });

        return sortedTodos.map(todo => ({
            id: todo.id,
            title: todo.fields.title,
            completed: todo.fields.completed,
            createdTime: todo.createdTime,
        }));
    } catch (error) {
        console.error("Error fetching todos:", error);
        throw error;
    }
};

export const addTodoToAPI = async (newTodo: { title: string }) => {
    const data = await apiRequest(AIRTABLE_API_BASE_URL, 'POST', {
        fields: { title: newTodo.title, completed: false },
    });
    return {
        id: data.id,
        title: data.fields.title,
        completed: data.fields.completed
    };
};

export const deleteTodoFromAPI = async (id: string) => {
    try {
        await apiRequest(`${AIRTABLE_API_BASE_URL}/${id}`, 'DELETE');
    } catch (error) {
        console.error("Failed to delete todo:", error);
    }
};

export const updateTodoInAPI = async (id: string, updateData: { completed?: boolean; title?: string }) => {
    return apiRequest(`${AIRTABLE_API_BASE_URL}/${id}`, 'PATCH', { fields: updateData });
};

