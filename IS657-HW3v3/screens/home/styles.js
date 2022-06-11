
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 'initial',
    height: '100%',
    },

    logo: {
        width: 40,
        height: 40,
        top: 100,
        resizeMode: 'contain'
    },

    image: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        resizeMode: 'contain',
      },

    buttonLocation: {
        paddingTop: '100%',
        paddingRight: '15%',
        alignSelf: 'flex-end'
      }
});

export default styles;