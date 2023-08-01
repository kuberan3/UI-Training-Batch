const initialState = {
  formData: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_FORM_VALUES":
      return { ...state, formData:action.payload };
    default:
      return state;
  }
};

export default formReducer;
