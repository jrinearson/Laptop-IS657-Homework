import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (

    // Main outer box to create borders around whole screen
    <View style={styles.container}>
      
      {/*Column box surrounding child boxes*/}
      <View style={styles.columnContainer}>
        <Text style={styles.text}>Column</Text>
        
        {/*Column child box 1*/}
        <View style={styles.columnBox}>
          <Text style={styles.text}>Child</Text>
        </View>

        {/*Column child box 2*/}
        <View style={styles.columnBox}>
          <Text style={styles.text}>Child</Text>
        </View>

        {/*Column child box 3*/}
        <View style={styles.columnBox}>
          <Text style={styles.text}>Child</Text>
        </View>
        </View>

      <View style={styles.rowContainer}> 
      <Text style={styles.text}>Row</Text> 
      
      {/*Row box surrounding child boxes*/}
      <View style={styles.rowFlexDesign}>
        
          
        
        {/*Row child box 1*/}
        <View style={styles.rowBox}>
          <Text style={styles.text}>Child</Text>
        </View>

        {/*Row child box 2*/}
        <View style={styles.rowBox}>
          <Text style={styles.text}>Child</Text>
        </View>

        {/*Row child box 3*/}
        <View style={styles.rowBox}>
          <Text style={styles.text}>Child</Text>
        </View> 
        </View>     
      </View>   
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: '10%',
    marginHorizontal: '5%',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',

     
  },

  columnContainer: {
    
    borderWidth: 2,
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 185


  },

  rowFlexDesign: {
    flexDirection: 'row',
    
  },

  rowContainer: {
    borderWidth: 2,


  },

  columnBox: {
    borderWidth: 2,
    width: 80,
    height: 50,
    alignItems: 'center',
    marginBottom: 5,
    marginHorizontal: 5

  },

  rowBox: {
    borderWidth: 2,
    width: 75,
    height: 50,
    alignItems: 'center',
    marginVertical: 2.5,
    marginHorizontal: 5



  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 5

  },
  rowHeading: {
    borderWidth: 2

  }

});
