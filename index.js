/**
 * @format
 */
import { AppRegistry } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { enableScreens } from 'react-native-screens';

import App from './src';

import { name as appName } from './app.json';

import 'react-native-gesture-handler';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
