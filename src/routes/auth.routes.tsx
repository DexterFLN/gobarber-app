// eslint-disable-next-line no-use-before-define
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// eslint-disable-next-line import/extensions
import SignIn from '../pages/SignIn';
// eslint-disable-next-line import/extensions
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
