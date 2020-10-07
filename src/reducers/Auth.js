
  const InitState = {
    isAuthenticated: false,
    error: null,
    userDetails : null,
  };
  
  const initialState = { ...InitState };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "IS_AUTHENTICATED":
        return { ...state, isAuthenticated: action.payload };
      case "USER_DETAILS":
        return { ...state, userDetails: action.payload };
      case "RESET":
        return { ...state, ...InitState };
      default:
        return state;
    }
  }
  