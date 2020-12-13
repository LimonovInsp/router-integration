import { REMOVE_ROUTE, SET_ROUTE } from "./constants";
import { Payload } from "./types";


export const setRoute = (payload: Payload) => {
    return {
        type: SET_ROUTE,
        payload,
    }
}

export const removeRoute = () => {
    return {
        type: REMOVE_ROUTE,
    }
}
