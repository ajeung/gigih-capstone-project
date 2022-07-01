import "./App.css";
import { Provider } from "react-redux";
import GlobalRoutes from "./router";
import store from "./redux/store/store";

const App = () => {
  return (
    <div className="app_container">
      <GlobalRoutes />
    </div>
  );
};

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
