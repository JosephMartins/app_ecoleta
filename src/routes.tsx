import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Points from './pages/Points';
import Datail from './pages/Datail';

const AppStack = createStackNavigator();


const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5'
          }
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Points" component={Points} />
        <AppStack.Screen name="Datail" component={Datail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
