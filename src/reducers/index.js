import { combineReducers } from "redux";
import Auth from "./Auth";
import Cart from "./Cart";
import Fav from "./Fav";

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  Auth, 
  Cart, 
  Fav,
};
