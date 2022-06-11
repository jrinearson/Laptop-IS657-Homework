import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default styles;