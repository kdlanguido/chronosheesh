import { setUserFullName, setUserId } from '@/utils/user.storage';
import axios from 'axios';

const API_URL = 'http://192.168.100.11:3000/users';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const loginUser = async (email: string, password: string) => {
    try {

        const response = await api.get(`/${email}/${password}`);

        await setUserFullName(response.data.fullName)
        await setUserId(response.data._id)

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'An error occurred';
    }
};

export const registerUser = async (email: string, password: string, specialPassword: string, fullName: string) => {
    try {

        if (email && password && specialPassword && fullName) {

            const response = await api.post('/', {
                email,
                password,
                specialPassword,
                fullName,
            });

            return response.data;
        }

    } catch (error) {
        console.error('Error registering user:', error);
        throw error.response ? error.response.data : 'An error occurred';
    }
};


export const getUserById = async (id: string) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error.response ? error.response.data : 'An error occurred';
    }
};

export const confirmChangePassword = async (email: string, newPassword: string) => {
    try {
        const response = await api.patch(`/${email}/${newPassword}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
};