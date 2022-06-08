import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    },

    logo: {
        width: 65,
        height: 65,
        top: 100
    },

    image: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        resizeMode: 'contain',
      },
});

export default styles;