import { applyMiddleware, createStore, Middleware, Store } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "remote-redux-devtools";
import rootReducer, { rootSaga } from "./ducks";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: Array<Middleware>) => {
  if (__DEV__) {
    let composeEnhancers = composeWithDevTools({
      realtime: true,
      name: "Your Instance Name",
      hostname: "localhost",
      port: 8000 // the port your remotedev server is running at
    });
    return composeEnhancers(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const store: Store = createStore(
  rootReducer,
  bindMiddleware([sagaMiddleware, logger])
);
sagaMiddleware.run(rootSaga);

export default store;
