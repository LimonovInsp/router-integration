import { SET_CLINIC } from "../actions/constants"
import { Action } from "../actions/types"

type Clinic = {
    name: string,
    city: string,
    location: string,
    id: string,
}

export interface ServiceProviderState {
    clinic: Clinic;
}

const clinic = {
    name: '',
    city: '',
    location: '',
    id: '',
}

const serviceProviderReducer = (state = clinic, action: Action) => {
    switch(action.type) {
        case SET_CLINIC:
            return {
                ...state,
                name: action.payload.name,
                city: action.payload.city,
                location: action.payload.location,
                id: action.payload.id,
            }
        default:
            return state;
    }
}

export default serviceProviderReducer;
