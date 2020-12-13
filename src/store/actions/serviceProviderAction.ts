import { Payload } from "./types";
import { SET_CLINIC } from './constants';

export const setClinic = (payload: Payload) => {
    return {
        type: SET_CLINIC,
        payload,
    }
}
