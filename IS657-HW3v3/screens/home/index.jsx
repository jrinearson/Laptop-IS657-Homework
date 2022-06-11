import { ImageBackground, View, Text, Pressable, Image } from 'react-native';

import styles from './styles';

export default function HomeSceen({ navigation }) {
  return (
    
    <View style={styles.container}>
    
    <ImageBackground 
    style={styles.image}
    source={require('../../assets/background.png')}/>

      <View style={styles.buttonLocation}>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Image
          style={styles.logo}
          source={require('../../assets/infowhite.png')}
        />

      </Pressable>
      </View>
    
    </View>
    
  );
}