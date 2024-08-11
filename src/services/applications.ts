import axios, { AxiosResponse } from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL as string;

export const getApplications = async (token: string) => {
    console.log('getApplications called');
    try {
        const response: AxiosResponse = await axios.get(baseUrl + '/api/applications', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log('data returned from getApplications', response.data);
        return response.data;
    } catch (error) {
        console.log('error from getApplications', error);
        console.error(error);
        return null;
    }
};
