import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

export const useAuthToken = () => {
    return useSelector((state: RootState) => state.user.user?.token);
};
