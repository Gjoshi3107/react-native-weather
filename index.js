/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/Main';
import { name as appName } from './app.json';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { myData } from './redux/reducers';

const store = createStore(myData);

export function getStateFromStore() {
  alert("Forecast Data:- " + JSON.stringify(store.getState()));
}

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
