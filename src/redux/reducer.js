import * as types from './actionType'

const initialState = {
    users:[],
    user:{},
    loading: true
}

const usersReducers =(state = initialState, action) =>{
    switch(action.type){
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case types.DELETE_USER:
            return {
                ...state,
                loading: false
            }
        case types.ADD_USER:
            return {
                ...state,
                loading: false
            }
        case types.GET_SINGLE_USER:
            console.log("GET_SINGLE_USER payload:", action.payload);
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case types.UPDATE_USER:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
} 

export default usersReducers;