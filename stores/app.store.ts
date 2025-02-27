import { atom } from 'jotai';
import { getIsLoggedIn } from '@/utils/storage';

export const isLoggedIn = atom(async () => {
    const storedValue = await getIsLoggedIn();
    return storedValue;
});
