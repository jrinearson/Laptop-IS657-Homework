import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    resizeMode: 'contain',
  },

  backgroundContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },

  title: {
      top: '30%',
      alignItems: 'center'

  },

  titleText: {
    fontSize: 30,
    fontWeight: '500'
    
  },

  button: {
      top: '30%',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      margin: 20,
      evaluation: 3,
      borderRadius: 15

  },

  buttonText: {
      fontSize: 20

  },

});

export default styles;