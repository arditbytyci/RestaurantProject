import axios from "axios";

export const createProduct = async formData => {

    const response = await axios.post('/api/product', formData);

    return response;


}