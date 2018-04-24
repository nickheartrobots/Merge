import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Store';

import Merge from './src/Merge';

//console.disableYellowBox = true;

const App = () => (
    <Provider store={Store}>
        <Merge />
    </Provider>
);

AppRegistry.registerComponent('Merge', () => App);

