import { CREATE_PRODUCT, GET_PRODUCT, GET_PRODUCTS, DELETE_PRODUCT } from "../constants/productConstants";


const INITIAL_STATE = {
    products: [],
};


const productReducer = (state= INITIAL_STATE, action) => {

    switch(action.type){
        case CREATE_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case GET_PRODUCTS:
            return {
                
                products: [...action.payload]
            }
        case GET_PRODUCT: 
            return {
                product: action.payload
            }    
        case DELETE_PRODUCT: 
            return {
                products: state.products.filter(p => p._id !== action.payload.id)
            }    
        
        default:
              return state;
 
        
    }


}


export default productReducer;