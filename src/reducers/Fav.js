
  const InitState = {
    items : [2,3]
  };
  
  const initialState = { ...InitState };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "UPDATE_FAV":
        return { ...state, items: action.payload };
      case "RESET":
        return { ...state, ...InitState };
      default:
        return state;
    }
  }
  