import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: '',
    width: '100%',
    height: '100%',
    padding: 150
    },

    text: {
      fontSize: 75,
      color: 'white',

    },
    
    image: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      resizeMode: 'contain',
    },

    defaultNavigationOptions: {
      title: 'Aligned Center',
      headerTitleAlign: 'center'
    }
});

export default styles;