import { BrowserRouter as Router, Switch } from "react-router-dom";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Routes from "./routes";
function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Switch>
              <Routes />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
