import {create} from 'zustand';
import { BaseUser, Stundent, Teacher } from '@/types/User';
type UserStore = {
    user: any,
    setUser: (user: Stundent | Teacher | BaseUser) => void,
    clearUser: () => void,
}

const useUserStore = create<UserStore>((set) => ({
    user: JSON.parse(localStorage.getItem("User") || '{}'),
    setUser: (user: any) => {
        set({ user });
    },
    clearUser: () => {
        set({ user: {} as any });
    }
}));


export default useUserStore;