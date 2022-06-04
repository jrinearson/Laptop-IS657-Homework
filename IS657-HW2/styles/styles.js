import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
    outerScreenContainer: {
      flex: 2,
      borderWidth: 2,
      marginVertical: 35,
      marginHorizontal: 5,
      paddingHorizontal: 20,
      paddingVertical: 20,
      maxHeight: 350, 
      maxWidth: 300
    },
  
    outerColumnContainer: {
      flex: 1,
      borderWidth: 2,
      paddingHorizontal: 20,
      paddingVertical: 20,
      maxHeight: 300,
      maxWidth: 125,
      marginBottom: 20
    },
  
    innerColumnContainer: {
      flex: 1,
      borderWidth: 2,
      maxHeight: 75,
      maxWidth: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray'
    },
  
    innerColumnContainerMiddle: {
      flex: 1,
      borderWidth: 2,
      maxWidth: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      marginVertical: 5
    },
  
    rowFlexDesign: {
      flexDirection: 'row',
    },
  
    outerRowText: {
    },
  
    outerRowcontainer: {
      flex: 1,
      borderWidth: 2,
      paddingHorizontal: 20,
      paddingVertical: 20,
      maxHeight: 115,
      maxWidth: 250,
    },
  
    innerRowContainer: {
      flex: 1,
      borderWidth: 2,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightgray'
    },
  
    innerRowContainerMiddle: {
      flex: 1,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightgray',
      marginHorizontal: 5
    },
  
    text: {
      fontSize: 14,
      fontFamily: 'Helvetica',
      fontWeight: 'bold'
    }
  
  });

export { styles }