import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../Auth/AuthScreen/AuthScreen';

import PasswordScreen from '../Auth/PasswordScreen/PasswordScreen';
import PasswordHeader from '../Auth/PasswordScreen/PasswordHeader';
import BankNavigation from '../Bank/BankNavigation/BankNavigation';
import MenuMain from '../Menu/MenuMain/MenuMain';

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
          <Main.Navigator
            initialRouteName="Bank"
            options={(header = () => PasswordHeader())}>
            <Main.Screen
              name="Auth"
              component={AuthScreen}
              options={{
                headerShown: false,
              }}
            />
            <Main.Screen
              name="Password"
              component={PasswordScreen}
              options={{
                header: () => <PasswordHeader />,
              }}
            />
            <Main.Screen name="Bank" component={BankNavigation} />
            {/*GEÇİCİ OLARAK BURADA*/}
            <Main.Screen name="Menu" component={MenuMain} />
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
            <Main.Screen name="Bank" component={BankNavigation} />
          </Main.Navigator>
        </NavigationContainer>
      </>
    );
};
export default MainNavigation;
