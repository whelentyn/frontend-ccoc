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
