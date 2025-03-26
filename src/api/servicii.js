import api from './index';

export const getAllServices = async () => {
    try {
        const response = await api.get('/Services/GetAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};
