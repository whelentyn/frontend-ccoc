import api from './index';

export const getAllPartners = async () => {
    try {
        const response = await api.get('/Partners/GetAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};
