import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/images/iamrichbg.jpg')}
        style={styles.image}/>
      <View style={styles.title}>
          <Text style={styles.titleText}>
          💎RICH TE$TER💎
          </Text>
      </View>
        
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>This is a profile</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    resizeMode: 'contain',
  },

  button: {
    top: '30%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    margin: 20,
    evaluation: 3,
    borderRadius: 15
},

title: {
  top: '10%',
  alignItems: 'center'
},

titleText: {
fontSize: 30,
fontWeight: '500'
},

});