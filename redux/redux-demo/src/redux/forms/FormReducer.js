const initialState = {
  formData: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_FORM_VALUES":
      return { ...state, formData:action.payload };
    case "STORE_DELETED_VALUES":
      return { ...state, formData:state.formData.filter((item, Index) => Index !== action.payload.index)}
    default:
      return state;
  }
};


export default formReducer;
