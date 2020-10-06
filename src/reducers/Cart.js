
  const InitState = {
    items : []
  };
  
  const initialState = { ...InitState };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "ADD_CART":
        return { ...state, items: action.payload };
      case "REMOVE_CART":
        return { ...state, items: action.payload };
      case "RESET":
        return { ...state, ...InitState };
      default:
        return state;
    }
  }
  