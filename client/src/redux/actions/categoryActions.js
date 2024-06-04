import { START_LOADING,STOP_LOADING } from "../constants/loadingConstants";
import { SHOW_SUCCESS_MESSAGE, SHOW_ERROR_MESSAGE } from "../constants/messageConstants";
import { GET_CATEGORIES } from "../constants/categoryConstants";
import axios from "axios";

 
export const getCategories =  () => async dispatch => {

    const respone = await axios.get('/api/category');

    return respone;

}




