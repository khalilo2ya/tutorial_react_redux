import * as types from './actionType'
import axios from 'axios'

const getUsers = (users)=>({
    type: types.GET_USERS,
    payload: users,
})


const userDeleted =() =>({
    type: types.DELETE_USER,
}) 

export const loadUsers = ()=>{
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((response)=>{
            console.log(response.data);
            dispatch(getUsers(response.data));
        }).catch(error => console.log(error));
    }
}
export const deleteUser = (id)=>{
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((response)=>{
            dispatch(userDeleted());
            dispatch(loadUsers());
        }).catch(error => console.log(error));
    }
}

