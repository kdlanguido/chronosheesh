import * as SecureStore from 'expo-secure-store';

const STORAGE_KEY = 'isLoggedIn';

export const setIsLoggedIn = async (value: boolean) => {
    try {
        await SecureStore.setItemAsync(STORAGE_KEY, JSON.stringify(value));
    } catch (error) {
        console.error("Error storing isLoggedIn:", error);
    }
};

export const getIsLoggedIn = async (): Promise<boolean> => {
    try {
        const value = await SecureStore.getItemAsync(STORAGE_KEY);
        return value !== null ? JSON.parse(value) : false;
    } catch (error) {
        console.error("Error getting isLoggedIn:", error);
        return false;
    }
};

export const deleteIsLoggedIn = async () => {
    try {
        await SecureStore.deleteItemAsync(STORAGE_KEY);
    } catch (error) {
        console.error("Error deleting isLoggedIn:", error);
    }
};
