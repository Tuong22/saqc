import axios from "axios";

const baseUrl = "http://localhost:44398/btec/_apis/saqc/";

export const functionServices = async (endpoint) => {
    try {
        const response = await axios.get(`${baseUrl}${endpoint}/all`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        throw error;
    }
};
