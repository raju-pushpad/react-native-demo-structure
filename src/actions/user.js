import axios from 'axios';
import * as actionTypes from './actionTypes';
import { AsyncStorage } from "react-native"
import { appConstants } from '../constants/constants';



export function createSuccess(response){
  return {
      type: actionTypes.CREATE_LOGIN_SUCCESS,
      payload: {
        response
      }
  }
}



export  function createError(error){
  return function(dispatch) {  
    dispatch({
      type: actionTypes.CREATE_LOGIN_ERROR,
      payload: error
    });   
  };
}



 
export function  userLogin(values) {
  return  function (dispatch) {
    axios.post(`${appConstants.WEB_SERVICE_URL}/api/users/login`,{"email": values.email ,"password": values.password})
      .then(function (response) {
        // if api calling is return success then response is dispatch to reducer via createSuccess method
        dispatch(createSuccess(response))
      })
    .catch(error => { 
      // otherwise createError will handle error
       dispatch(createError(error.response.data.error)) 
     });
  };
}
