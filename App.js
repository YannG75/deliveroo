import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen, HomeScreen, MenuScreen} from './Screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Provider} from 'react-redux';
import {countReducer} from './Store/Store';
import {createStore} from 'redux';

const store = createStore(countReducer);

const MainStack = createSharedElementStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator mode="modal">
            <RootStack.Screen
              name="Main"
              component={MainStackScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="Menu"
              component={MenuScreen}
              options={{headerShown: false}}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
