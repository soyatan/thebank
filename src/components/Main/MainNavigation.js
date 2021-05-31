import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../Auth/AuthScreen/AuthScreen';

const Main = createStackNavigator();

const MainNavigation = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [initializing, setInitializing] = useState(false);

  if (initializing) {
    return null;
  }

  if (!loggedInUser) {
    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
        <NavigationContainer>
          <Main.Navigator>
            <Main.Screen name="Auth" component={AuthScreen} />
          </Main.Navigator>
        </NavigationContainer>
      </>
    );
  } else
    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
        <NavigationContainer>
          <Main.Navigator>
            <Main.Screen name="Bank" component={BankMain} />
          </Main.Navigator>
        </NavigationContainer>
      </>
    );
};
export default MainNavigation;