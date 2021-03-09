/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/Main';
import { name as appName } from './app.json';


import { Provider } from 'react-redux';


const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
