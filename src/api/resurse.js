import api from './index';

export const getAllResources = async () => {
    try {
        const response = await api.get('/Resources/GetAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching resources:', error);
        throw error;
    }
};

export const getResourcesByType = async (type) => {
    if (!type) {
        throw new Error("Tag parameter is required.");
    }

    try {
        const response = await api.get('/Resources/GetByType', {
            params: { type },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching resource with type "${type}":`, error);
        throw error;
    }
};