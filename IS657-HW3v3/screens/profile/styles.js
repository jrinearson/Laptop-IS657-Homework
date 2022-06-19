
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'initial',
    height: '100%',
    padding: 20
    },

    text: {
      fontSize: 50,
      color: 'white',
      alignItems: 'center'
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
    },

  
});

export default styles;