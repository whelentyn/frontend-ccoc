import api from './index';

export const getCarouselPage = async () => {
    try {
        const response = await api.get('/CarouselPages/GetAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};
