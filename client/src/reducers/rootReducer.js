import { combineReducers } from "redux";
import products from "./productsReducer";
import orders from "./ordersReducer";
import messages from "./messagesReducer";

export default combineReducers({
  messages,
  orders,
  products
});
