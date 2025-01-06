export const getEnv = () => {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
        return import.meta.env;
    }

    // Fallback for Jest testing or non-browser environments
    if (typeof process !== 'undefined' && process.env) {
        return {
            VITE_AIRTABLE_BASE_ID: process.env.VITE_AIRTABLE_BASE_ID,
            VITE_TABLE_NAME: process.env.VITE_TABLE_NAME,
            VITE_AIRTABLE_API_TOKEN: process.env.VITE_AIRTABLE_API_TOKEN,
        };
    }

    throw new Error('Environment variables are not available.');
};