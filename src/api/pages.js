import api from './index';

export const getAllPages = async () => {
    try {
        const response = await api.get('/Page/GetAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};

export const getPageBySlug = async (slug) => {
    if (!slug) {
        throw new Error("Slug parameter is required.");
    }

    try {
        const response = await api.get('/Page/GetBySlug', {
            params: { slug },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching article with slug "${slug}":`, error);
        throw error;
    }
};
