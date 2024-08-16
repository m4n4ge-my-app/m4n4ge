import axios, { AxiosResponse } from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL as string;
const workModelMapping: { [key: string]: string } = {
    "1": "On-Site",
    "2": "Hybrid",
    "3": "Remote"
}

export const getApplications = async (token: string) => {
    try {
        const response: AxiosResponse = await axios.get(baseUrl + '/api/applications', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const addApplication = async (token: string, data: any) => {
    data.workModel = workModelMapping[data.workModel[0]];
    try {
        const response: AxiosResponse = await axios.post(baseUrl + '/api/applications', data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error('error from addApplication', error);
        return error;
    }
};
