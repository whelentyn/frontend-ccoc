import api from './index';

export const getAllVoluntariat = async () => {
    try {
        const response = await api.get('/Volunteering/Get');
        return response.data;
    } catch (error) {
        console.error('Error fetching resources:', error);
        throw error;
    }
};
