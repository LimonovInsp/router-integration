import { SERVICE_APPOINTMENT } from "./constants"
import { Payload } from "./types"

export const setAppointment = (payload: Payload) => {
    return {
        type: SERVICE_APPOINTMENT,
        payload
    }
}
