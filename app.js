import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApiProvider } from './context/ApiContext';
import ApiScreen from './screens/ApiScreen';
import SensorScreen from './screens/SensorScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ApiProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="API" component={ApiScreen} />
          <Tab.Screen name="Sensor" component={SensorScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApiProvider>
  );
}
