import api from './index';

export const getAllReports = async () => {
    try {
        const response = await api.get('/Reports/GetAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};
