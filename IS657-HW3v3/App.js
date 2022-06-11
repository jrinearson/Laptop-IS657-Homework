import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import styles from './screens/home/styles';
import ProfileScreen from './screens/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
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
          title: 'IAmRich',
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