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
