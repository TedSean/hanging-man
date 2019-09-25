import { types } from "../actions/index";

const initialState = [];

export const game = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH:
            return state

        default: 
            return state;
    }
}

export default game;