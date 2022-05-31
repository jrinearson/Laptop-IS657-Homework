import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerBoxes}>
      <View style={styles.columnBox}>
        <Text style={styles.headingText}>Column</Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>Child</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>Child</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>Child</Text>
        </View>
        </View>
        

      
      <View style={styles.rowBox}>
        <View style={styles.RowBoxAlignment}>
          <Text style={styles.headingText2}>Row</Text>
          </View>

        
        <View style={styles.box}>
          <Text style={styles.boxText}>Child</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>Child</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>Child</Text>
        </View>

      </View>

      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'green',
    marginVertical: '15%',
    marginHorizontal: '5%'

  },

  containerBoxes: {
    justifyContent: 'left'
  },

  columnBox: {
    alignItems: 'center',
    borderWidth: 2,
    marginVertical: '10%',
    marginHorizontal: '30%'

  },

  headingText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '10%'

  },

  
  headingText2: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '10%',
    marginLeft: '10%'
    

  },
      
  rowBox: {
    flexDirection: 'row',
    borderWidth: 2,
    justifyContent: 'space-evenly',
    marginHorizontal: '10%'
    
    
  },

  box: {
    width: 60,
    height: 50,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'green',
    marginVertical: '10%',
    backgroundColor: 'lightgray',
    justifyContent: 'space-evenly'


  },

  boxText: {
    fontSize: 18,
    fontWeight: 'bold'

  },


});
