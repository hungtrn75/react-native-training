import { applyMiddleware, createStore, Middleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./ducks";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: Array<Middleware>) => {
  if (process.env.NODE_ENV === "development") {
    const { logger } = require("redux-logger");
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware, logger));
  }

  return applyMiddleware(...middleware);
};

const store: Store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
sagaMiddleware.run(rootSaga);

export default store;
