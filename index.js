/**
 * @format
 */

import {AppRegistry,LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from  "react-redux"
import { store } from './src/redux/store';
LogBox.ignoreAllLogs();
const Index = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => Index);
