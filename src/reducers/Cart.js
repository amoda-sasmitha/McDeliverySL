
  const InitState = {
    items : []
  };
  
  const initialState = { ...InitState };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "UPDATE_CART":
        return { ...state, items: action.payload };
      case "RESET":
        return { ...state, ...InitState };
      default:
        return state;
    }
  }
  