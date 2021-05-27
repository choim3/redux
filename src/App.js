import { createStore } from "redux";
import allReducer from "./reducers/index";
import Home from "./home";
function App() {
  const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
