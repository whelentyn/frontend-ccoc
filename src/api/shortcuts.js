import api from './index';

export const getAllShortcuts = async () => {
    try {
        const response = await api.get('/Shortcuts/GetAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};
