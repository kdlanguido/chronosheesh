import axios from 'axios';

const API_URL = 'http://192.168.100.11:3000/mailer';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const sendForgotPassword = async (email: string) => {
    const randomCode = Math.floor(100000 + Math.random() * 900000);

    if (email) {

        const response = await api.post('/', {
            email,
            randomCode
        });

        return response.data;
    }

};

export const confirmVerificationCode = async (code: string, email: string) => {
    const response = await api.post('/verify', {
        code,
        email
    });

    return response.data;
}
