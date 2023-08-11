export const storeFormValues = (formData) => {
    return {
      type: 'STORE_FORM_VALUES',
      payload: formData,
    };
  };
  export const storeDeletedValues = (index) =>{
    return {
      type: 'STORE_DELETED_VALUES',
      payload: {index}
    }
  }