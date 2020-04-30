import { UPDATE_PRODUCTS } from '../actions/updateProducts';

const productListReducer = (state = {}, {type, payloads}) => {
    switch (type) {
        case UPDATE_PRODUCTS:
            return { name: payloads };
        default:
            return state;
    };
};

export default productListReducer;