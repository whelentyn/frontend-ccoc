import api from './index';

export const getAllPersonal = async () => {
    try {
        const response = await api.get('/People/GetAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};

export const getPersonalByTag = async (tag) => {
    if (!tag) {
        throw new Error("Tag parameter is required.");
    }

    try {
        const response = await api.get('/Personal/GetByTag', {
            params: { tag },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching article with slug "${tag}":`, error);
        throw error;
    }
};

export const getAllPersonalTags = async () => {
    try {
        const response = await api.get('/PersonTags/GetAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};


