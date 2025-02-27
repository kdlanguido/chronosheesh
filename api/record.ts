import axios from 'axios';

const API_URL = 'http://192.168.100.11:3000/records';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const scanQrCode = async (className: string, userId: string) => {
    try {
        if (className && userId) {

            const response = await api.post(`/`, {
                className,
                userId
            });

            if (response.data.status === 300) {
                alert("Class Code already scanned!")
            } else {
                alert("Class recorded successfully.")
            }
        }
    } catch (error) {
        if (error.response) {
            console.error('Error Response:', error.response.data);
            throw new Error(error.response.data.message || 'An error occurred');
        } else if (error.request) {
            console.error('Error Request:', error.request);
            throw new Error('No response received from the server');
        } else {
            console.error('Error Message:', error.message);
            throw new Error(error.message || 'An error occurred');
        }
    }
};

export const getRecords = async (userId: string) => {
    try {
        const response = await api.get(`/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'An error occurred';
    }
}