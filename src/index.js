import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

import * as serviceWorker from "./serviceWorker";
import firebaseConfig from "./config/firebaseConfig";

import "./index.css";
import App from "./App";
import rootReducer from "./store/reducers/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore
      })
    ),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, {
      userProfile: "users",
      useFirestoreForProfile: true,
      attachAuthIsReady: true
    })
  )
);

console.log("store:", store.getState());

store.firebaseAuthIsReady.then(r => {
  console.log("firebaseAuthIsReady:", r);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  console.log("qqw");

  serviceWorker.unregister();
});
