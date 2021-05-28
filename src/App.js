import Home from "./home";
import Cart from "./cart";
import allReducer from "./reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

function App() {
  const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
