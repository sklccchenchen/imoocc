// import { dispatch } from "rxjs/internal/observable/range";

const ADD_GUN = 'add';
const REMOVE_GUN = 'reduce';

export function counter(state=10, action) {
    switch(action.type) {
        case 'add':
            return state + 1; 
        case 'reduce':
            return state - 1;
        default:
            return 10;
    }
}

//  actionCreator
export function addGun() {
    return { type: ADD_GUN };
} 
export function removeGun() {
    return { type: REMOVE_GUN };
} 
export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: ADD_GUN})
        },2000)
    }
}
