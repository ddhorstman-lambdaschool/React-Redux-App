import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import LotRContainer from "./components/LotRContainer";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <LotRContainer />
    </Provider>
  );
}

export default App;
