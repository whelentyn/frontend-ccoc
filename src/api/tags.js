import api from './index';

export const getTags = async () => {
    try {
        const response = await api.get('/Tags/GetAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};
