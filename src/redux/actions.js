import * as types from './actionType'
import axios from 'axios'

const getUsers = (users)=>({
    type: types.GET_USERS,
    payload: users,
})


const getUser = (user)=>({
    type: types.GET_SINGLE_USER,
    payload: user,
})


const userDeleted =() =>({
    type: types.DELETE_USER,
}) 


const userAdded =() =>({
    type: types.ADD_USER,
}) 


const userUpdated =() =>({
    type: types.UPDATE_USER,
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
export const updateUser = (user, id)=>{
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user).then((response)=>{
            dispatch(userUpdated(user, id));
            dispatch(loadUsers());
        }).catch(error => console.log(error));
    }
}
export const getUserByID = (id)=>{
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((response)=>{
            dispatch(getUser(response.data));
        }).catch(error => console.log(error));
    }
}
export const addUser = (user)=>{
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, user).then((response)=>{
            dispatch(userAdded());
            dispatch(loadUsers());
        }).catch(error => console.log(error));
    }
}

