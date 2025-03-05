import axios from "axios";

const urlApi = "https://wmw3lg8sha.execute-api.us-east-2.amazonaws.com/dev/dummy";

export const fetchHotels = async () => {
    try {
        const response = await axios.get(urlApi);
        console.log("response", response.data.data);
        return response.data.data;
        

    } catch (error) {
        console.error("Error fetching hotels", error);
        throw error;
    }
}