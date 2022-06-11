import { ImageBackground, View, Text, StyleSheet} from 'react-native';
import styles from './styles';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground 
            style={styles.image}
            source={require('../../assets/background2.png')}/>
            <View>
                <Text style={styles.text}>
                    I am rich I deserv it I am good, healhty {'&'} successful
                </Text>
            </View>
        </View>
    )
}


