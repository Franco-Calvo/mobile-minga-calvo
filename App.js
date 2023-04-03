import React from 'react';
import BottomTabsNavigation from './src/Navigations/BottomTabsNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/Store/store.js';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabsNavigation/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;