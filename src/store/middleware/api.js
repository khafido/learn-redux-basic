import axios from "axios";
import { apiProductsRequestSucceeded } from '../product';

const api = store => next => async action => {
    if (action.type !== "apiRequest") return next(action);
    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;
    const response = await axios.request({
        // baseURL: "http://localhost:3001/api",
        url,
        method,
        data,
    });

    store.dispatch(apiProductsRequestSucceeded(response.data));
};

export default api;