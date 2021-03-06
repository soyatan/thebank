import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../Auth/AuthScreen/AuthScreen';

import PasswordScreen from '../Auth/PasswordScreen/PasswordScreen';
import PasswordHeader from '../Auth/PasswordScreen/PasswordHeader';
import BankNavigation from '../Bank/BankNavigation/BankNavigation';
import MenuMain from '../Menu/MenuMain/MenuMain';
import MenuSub from '../Menu/MenuMain/MenuSub';
import {Colors} from '../../constants/Colors';
import BankHeader from '../Bank/BankHeader/BankHeader';

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
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Colors.mainColor}
        />
        <NavigationContainer>
          <Main.Navigator
            initialRouteName="Bank"
            //options={(header = () => PasswordHeader())}
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: Colors.mainColor,
              },
              headerTintColor: Colors.mainWhite,
            }}>
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
                header: () => <PasswordHeader bgColor={'darkGray'} />,
              }}
            />
            <Main.Screen
              name="Bank"
              component={BankNavigation}
              options={{
                headerShown: false,
              }}
            />

            <Main.Screen
              name="Menu"
              component={MenuMain}
              options={{
                title: 'Menu',
              }}
            />
            <Main.Screen
              name="Sub"
              component={MenuSub}
              options={({route}) => ({title: route.params.name})}
            />
          </Main.Navigator>
        </NavigationContainer>
      </>
    );
  } else
    return (
      <>
        <NavigationContainer>
          <Main.Navigator>
            <Main.Screen name="Bank" component={BankNavigation} />
          </Main.Navigator>
        </NavigationContainer>
      </>
    );
};
export default MainNavigation;
