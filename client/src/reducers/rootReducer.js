import { combineReducers } from "redux";
import products from "./productsReducer";
import messages from "./messagesReducer";

export default combineReducers({
  messages,
  products
});
