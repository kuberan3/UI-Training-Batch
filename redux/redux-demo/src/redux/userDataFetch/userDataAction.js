// actions.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users'; // Replace this with your API URL

// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action Creators
export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
export const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

// Async Action (using redux-thunk)
export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get(API_URL)
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
       
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
