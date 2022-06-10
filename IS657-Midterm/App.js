import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [message, setMessage] = useState('');

  function getSum() {
    const total = number + number2;
    return `${total}`;
  }

  function GetFirstNumber(input) {
    const inputNumber = parseInt(input) || 0;
    setNumber(inputNumber)
  }

  function GetSecondNumber(input2) {
    const inputNumber2 = parseInt(input2) || 0;
    setNumber2(inputNumber2)
  }

  function RefreshPage() {
    window.location.reload(false)
  }

  return (

    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>
        IS657 Midterm
      </Text>
      </View>

      <View style={styles.rowDirection}>
        <Text style={styles.text}>
          Number1 [10 to 20]
        </Text>

        <View style={styles.formatInputBox}>
        <TextInput style={styles.inputBox}
        onChangeText={GetFirstNumber}
          value={number.toString()}
          keyboardType='numeric'>
        </TextInput>
        </View>
      </View>

      <View style={styles.rowDirection}>
        <Text style={styles.text}>
          Number2 [100 to 200]
        </Text>

        <View style={styles.formatInputBox}>
        <TextInput style={styles.inputBox}
        onChangeText={GetSecondNumber}
          value={number2.toString()}
          keyboardType='numeric'>
        </TextInput>
        </View>
      </View>
      
      <View style={styles.rowDirection}>
        <Button
          title='CALCULATE SUM'
          onPress = {() => setMessage(getSum)}>
        </Button>
        
        <View style={styles.sumBox}>
        <Text style={styles.text}>
          {message}
        </Text>
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 'initial%',
    height: '100%',
    margin: 2,
    padding: 20

  },

  titleContainer: {
    width: '100%',
    height: 150,
    backgroundColor: 'teal',
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Helvetica',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20
    
    
  },

  title: {
    color: 'goldenrod',
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Helvetica',
    

  },

  text: {
    color: 'black',
    alignItems: 'center',
    fontSize: 15,    
    fontFamily: 'Helvetica',
    paddingVertical: 5,

  },

  inputBox: {
    
    width: 100,
    height: 50,
    color: 'black',
    alignItems: 'center',
    fontSize: 15,    
    fontFamily: 'Helvetica',
    padding: 5,
    borderWidth: 2,
    marginBottom: 20
    
  },

  sumBox: {
    
    width: 100,
    height: 50,
    color: 'black',
    alignItems: '',
    fontSize: 15,    
    fontFamily: 'Helvetica',
    padding: 5,
    borderWidth: 2,
    
    
  
  },

  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'

  },



});
