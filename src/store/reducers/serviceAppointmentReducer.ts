import { SERVICE_APPOINTMENT } from '../actions/constants';
import { Action } from '../actions/types';

type Appointment = {
    type: string;
    price: number | string,
    currency: string,
    tag: string,
    description: string,
    signs: string[];
    id: string;
}

export interface ServiceAppointmentState {
    appointment: Appointment;
}

const appointment = {
    type: '',
    price: '',
    currency: '',
    tag: '',
    description: '',
    signs: [],
    id: '',
}

const serviceAppointmentReducer = (state = appointment, action: Action) => {
    switch(action.type) {
        case SERVICE_APPOINTMENT:
            return {
                ...state,
                type: action.payload.type,
                price: action.payload.price,
                currency: action.payload.currency,
                tag: action.payload.tag,
                description: action.payload.description,
                signs: [...action.payload.signs],
                id: action.payload.id
            };
        default:
            return state;
    }

}


export default serviceAppointmentReducer;
