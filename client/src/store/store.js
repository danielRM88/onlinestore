import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";

import productsMiddleware from "../middleware/productsMiddleware";

const store = createStore(rootReducer, {}, applyMiddleware(productsMiddleware));
export default store;
