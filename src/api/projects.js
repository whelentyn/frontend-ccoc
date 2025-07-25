import api from "./index";

export const getAllProjects = async () => {
    try {
        const response = await api.get('/Projects/GetAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};

export const getAllParents = async () => {
    try {
        const response = await api.get('/Projects/GetAllParents');
        return response.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};

export const getProjectBySlug = async (slug) => {
    if (!slug) {
        throw new Error("Slug parameter is required.");
    }

    try {
        const response = await api.get('/Projects/GetBySlug', {
            params: { slug },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching article with slug "${slug}":`, error);
        throw error;
    }
};

export const getChildren = async (parentSlug) => {
    if (!parentSlug) {
        throw new Error("Slug parameter is required.");
    }

    try {
        const response = await api.get('/Projects/GetChildren', {
            params: { parentSlug },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching article with slug "${parentSlug}":`, error);
        throw error;
    }
};

