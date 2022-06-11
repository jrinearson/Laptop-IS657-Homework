import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/profile';
import MainScreen from './screens/profile';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={MainScreen}
          options={{ 
            headerStyle: {
              backgroundColor: 'gray'
            },
            title: 'IAmRich',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white'
            }
          }}
        />
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ 
          headerStyle: {
            backgroundColor: 'gray'
          },
          title: '',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
          }
        }}        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}