import { Button } from '@/components/ui/button';
import useUserStore from '@/store/userStore';
import { BaseUser, Stundent, Teacher } from '@/types/User';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const [showPopup, setShowPopup] = useState(false);
    const {setUser} = useUserStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        
        localStorage.removeItem("accessToken");
        localStorage.removeItem("User");
        setUser({} as Stundent | BaseUser | Teacher);
        navigate("/");
    };

    return (
        <div>
            <Button 
            onClick={() => setShowPopup(true)} 
            className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-600"
            >
            Logout
            </Button>

            {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-purple-100 border-2 border-purple-700 p-6 rounded-md text-center">
                <p className="text-purple-700 font-bold mb-4">Are you sure you want to log out?</p>
                <button 
                    onClick={handleLogout} 
                    className="bg-purple-700 text-white px-4 py-2 rounded-md mr-2 hover:bg-purple-800"
                >
                    Yes
                </button>
                <button 
                    onClick={() => setShowPopup(false)} 
                    className="bg-purple-200 text-purple-700 px-4 py-2 rounded-md border border-purple-700 hover:bg-purple-300"
                >
                    No
                </button>
                </div>
            </div>
            )}
        </div>
    );
}
