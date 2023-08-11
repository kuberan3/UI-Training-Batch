import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "./userDataAction";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case POST_DATA_SUCCESS:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};

export default dataReducer;
