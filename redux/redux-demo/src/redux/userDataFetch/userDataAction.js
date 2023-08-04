import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users"; 

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const POST_DATA_REQUEST = "POST_DATA_REQUEST";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE";


export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const postDataRequest = ()=>({
  type:POST_DATA_REQUEST
})

export const postDataSuccess = (data) => ({
  type:POST_DATA_SUCCESS,
  payload:data,
})

export const postDataFailure = (data)=>({
  type:POST_DATA_FAILURE,
  payload:data,
})

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
export const postData = (data) =>{
  return (dispatch)=>{
    dispatch(postDataRequest());
    axios.post(API_URL,data)
    .then((res)=>{
      dispatch(postDataSuccess(data))
    })
    .catch((error)=>{
      // dispatch(postDataFailure(error))
    })
  }
}