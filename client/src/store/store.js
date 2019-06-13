import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";

import productsMiddleware from "../middleware/productsMiddleware";
import ordersMiddleware from "../middleware/ordersMiddleware";

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(productsMiddleware, ordersMiddleware)
);
export default store;
