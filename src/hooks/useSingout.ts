import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { show } from "../state/feeback/feedbackSlice";
import { resetUser } from "../state/user/userSlice";
import { useState } from "react";


export const useSignout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean | null>(null);
    
    const signout = async () => {
        setIsLoading(true);
        try {
        // Clear user from local storage
        localStorage.removeItem('user');
        dispatch(resetUser());
        navigate('/');
        } catch (error) {
        setIsLoading(false);
        dispatch(
            show({
            message: 'An unexpected error occurred',
            severity: 'error',
            })
        );
        }
    };
    return { signout, isLoading };
    }
