import React from 'react';
import { ImageBackground, View, Text} from 'react-native';
import styles from './styles';

function MainScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground 
            style={styles.image}
            source={require('../../assets/background2.png')}/>
            <View>
                <Text style={styles.text}>
                    I am rich I deserv it I am good, healthy {'&'} successful
                </Text>
            </View>
        </View>
    )
}

export default MainScreen;


