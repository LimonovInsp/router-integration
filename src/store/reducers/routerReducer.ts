import { REMOVE_ROUTE, SET_ROUTE } from "../actions/constants";
import { Action } from "../actions/types";

type Route = {
    route: string;
}

export interface RouterState {
    router: Route[];
}


const router: Route[] = [];

const routerReducer = (state = router, action: Action) => {
    switch(action.type) {
        case SET_ROUTE:
            return [...state, action.payload];
        case REMOVE_ROUTE:
            return [
                ...state.slice(0, state.length - 1),
            ];
        default:
            return state;
    }
}

export default routerReducer;
