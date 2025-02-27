import * as SecureStore from 'expo-secure-store';

const Storage_UserFullName = 'userInfo';
const Storage_UserId = 'userId';

export const setUserFullName = async (value: string) => {
    try {
        await SecureStore.setItemAsync(Storage_UserFullName, JSON.stringify(value));
    } catch (error) {
        console.error("Error storing userInfo:", error);
    }
};

export const getUserFullName = async (): Promise<string> => {
    try {
        const value = await SecureStore.getItemAsync(Storage_UserFullName);
        return value !== null ? JSON.parse(value) : false;
    } catch (error) {
        console.error("Error getting userInfo:", error);
        return "";
    }
};

export const deleteUserFullName = async () => {
    try {
        await SecureStore.deleteItemAsync(Storage_UserFullName);
    } catch (error) {
        console.error("Error deleting userInfo:", error);
    }
};


export const setUserId = async (value: string) => {
    try {
        await SecureStore.setItemAsync(Storage_UserId, JSON.stringify(value));
    } catch (error) {
        console.error("Error storing userInfo:", error);
    }
};

export const getUserId = async (): Promise<string> => {
    try {
        const value = await SecureStore.getItemAsync(Storage_UserId);
        return value !== null ? JSON.parse(value) : false;
    } catch (error) {
        console.error("Error getting userInfo:", error);
        return "";
    }
};

export const deleteUserId = async () => {
    try {
        await SecureStore.deleteItemAsync(Storage_UserId);
    } catch (error) {
        console.error("Error deleting userInfo:", error);
    }
};