import { View, Text, StyleSheet} from 'react-native';
import styles from './styles';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground 
            style={styles.image}
            source={require('../../assets/diamondbg.jpg')}/>
        </View>
    )
}


