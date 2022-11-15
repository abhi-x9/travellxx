
const clientReducer = (state, action) => {
  
  switch (action.type) {
    case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        }
    
    case "MY_API_DATA":
      return {
        ...state,
        home: action.payload,
        isLoading: false,
        isError: false,
      }
    case "DETAILS_DATA":
      return {
        ...state,
        details: action.payload,
        isError: false,
        isLoading: false,
      }
    case "SLIDER_DATA":
      return {
        ...state,
        slider: action.payload,
        isLoading: false,
        isError: false
      }

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      return state;
  }
};


export default clientReducer