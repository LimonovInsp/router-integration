import { combineReducers } from "redux";
import routerReducer from "./routerReducer";
import serviceAppointmentReducer from "./serviceAppointmentReducer";
import serviceProviderReducer from "./serviceProviderReducer";

const rootReducer = combineReducers({
    appointment: serviceAppointmentReducer,
    router: routerReducer,
    clinic: serviceProviderReducer,
});

export default rootReducer;
