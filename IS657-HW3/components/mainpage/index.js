import React from "react";
import { ImageBackground, Text, View, Pressable } from 'react-native';
import styles from './styles'

const MainPage = () => {

    return (
        <View style={styles.backgroundContainer}>
            <ImageBackground 
            source={require('../../assets/images/iamrichbg.jpg')}
            style={styles.image}>
            </ImageBackground>
        <View style={styles.title}>
            <Text style={styles.titleText}>
            💎RICH TE$TER💎
            </Text>
        </View>
        <Pressable 
        style={styles.button}
        onPress={() => {console.warn('👌Custom Order👌');}}>
            <Text style={styles.buttonText}>
                TE$T RICHNE$$
            </Text>

        </Pressable>
        
        </View>
    )



}

export default MainPage;
