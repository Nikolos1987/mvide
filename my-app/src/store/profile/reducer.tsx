
import { TOOGLE_VISIBLE_PROFILE, COUNT } from "./types";
import {data} from "./data"

const intialState = {
    data : data,
    isvisible: false,
}
export const profileReducer = (state = intialState, action: any) => {
    switch (action.type) {
        case TOOGLE_VISIBLE_PROFILE:
            return { ...state, isvisible: !state.isvisible }
        default:
            return state;
    }
}

const intialState1 = {
    data: "Акции, скидки, распродажи ",
    numb: 0,
}

export const testReduser = (state: { data: string; numb: number } = intialState1, action: any) => {
    switch (action.type) {
        case COUNT:
            return { state, numb: state.numb + 1 }
        default:
            return state;
    }
}
