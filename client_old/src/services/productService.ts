const API_URL = 'http://localhost:3000/api/productsPS3';

export const getProducts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data;
}; 