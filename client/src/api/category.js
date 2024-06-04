import axios from "axios";




export const createCategory = async (formData) => {

    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const respose = await axios.post('/api/category', formData, config);



    return respose;

}


export const getCategories = async () => {

    const respone = await axios.get('/api/category');

    return respone;

}
