import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

import { show } from '../state/feeback/feedbackSlice';
import { useAuthToken } from './useAuthToken';
import { RootState } from '../state/store';

const baseUrl = import.meta.env.VITE_BASE_URL as string;

export const useUpload = () => {
  const signedInUser = useSelector((state: RootState) => state.user.user);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const dispatch = useDispatch();
  const token = useAuthToken();

  const upload = async (data: FormData) => {
    setIsLoading(true);

    // Temporary access control for demonstration accounts
    if (
      signedInUser?.email === 'new_user@m4n4gemy.app' ||
      signedInUser?.email === 'expert_user@m4n4gemy.app'
    ) {
      dispatch(
        show({
          message:
            'Access Denied: Demonstration accounts do not have the privileges to add file. Please create a personal account for full access.',
          severity: 'error',
        })
      );
      return;
    }

    try {
      const response = await axios.post(baseUrl + '/api/documents', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setIsLoading(false);
      return response;
    } catch (error) {
      console.error('Error uploading file:', error);
      setIsLoading(false);
      dispatch(
        show({
          message: 'Error uploading file. Please try again later.',
          severity: 'error',
        })
      );
      return null;
    }
  };
  return { upload, isLoading };
};
