import {create} from 'zustand';
import API from '@/api/apiConfig';


type AuthStore = {
    accessToken: string | null;
    setAccessToken: (token: string) => void;
    clearAccessToken: () => void;
    refreshAccessToken: () => Promise<boolean>;
}


const useAuthStore = create<AuthStore>((set, get) => ({
    accessToken: localStorage.getItem('accessToken') || null,
    setAccessToken: (token: string) => {
        set({ accessToken: token});
        localStorage.setItem('accessToken', token);
    },
    clearAccessToken: () => {
        set({ accessToken: null});
        localStorage.removeItem('accessToken');
    },
    refreshAccessToken: async () => {
        try {
            const response = await API.post('/auth/refresh', {}, {withCredentials: true});
            const newAccessToken = response.data.accessToken;
            get().setAccessToken(newAccessToken);
            return true;
        } catch (error) {
            get().clearAccessToken();
            return false;
        }   
    }
}))

export default useAuthStore;