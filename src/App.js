import logo from './logo.svg';
import './App.css';
import ErrorFallback from './Components/ErrorPage/ErrorPage';
import AppRoutes from "./Routes";
import { ErrorBoundary } from "react-error-boundary";
import { ConnectedRouter } from "connected-react-router";
import { history } from './utils';
import { Provider } from 'react-redux';
import store from './store';



function App() {

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
    >
      <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppRoutes />
      </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;



