import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { legacy_createStore as createStore } from "redux"

import App from "./App"
import reducers from "./reducers"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
)
