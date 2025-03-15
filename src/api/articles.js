import api from './index';

export const getArticles = async (count = null) => {
    try {
        const response = await api.get('/Articles/GetAll', {
            params: count ? { count } : {},
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
};

export const getArticlesByTag = async (tag, count = null) => {
    if (!tag) {
        throw new Error("Tag parameter is required.");
    }

    try {
        const response = await api.get('/Articles/GetByTag', {
            params: { tag, ...(count && { count }) },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching articles for tag "${tag}":`, error);
        throw error;
    }
};

export const getArticleBySlug = async (slug) => {
    if (!slug) {
        throw new Error("Slug parameter is required.");
    }

    try {
        const response = await api.get('/Articles/GetBySlug', {
            params: { slug },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching article with slug "${slug}":`, error);
        throw error;
    }
};
