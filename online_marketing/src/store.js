import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { createLogger } from "redux-logger";

const logger = createLogger({});

const persistConfig = {
  key: "root",
  storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunkMiddleware];
// redux devtools
const enhancers =
  process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(...middlewares, logger))
    : compose(applyMiddleware(...middlewares));
// create redux store
export const store = createStore(persistedReducer, {}, enhancers);
export const persistor = persistStore(store);

//export const storeConfig = configureStore();
