const LOGIN = 'login';
const LOGOUT = 'logout';

export function auth(state={isAuth: false,user:'liyunlong'},action) {
    switch(action.type) {
        case LOGIN:
            return {...state, isAuth: true};
        case LOGOUT:
            return {...state,isAuth: false};
        default:
            return state;
    }
}


//  actionCreator
export function Login() {
    return {type: LOGIN}
}

export function Logout() {
    return {type: LOGOUT}
}