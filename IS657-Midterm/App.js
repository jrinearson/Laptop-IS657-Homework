import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [message, setMessage] = useState('');

  const min1 = 10;
  const max1 = 20;
  const min2 = 100;
  const max2 = 200;

  function getSum() {
    const total = parseInt(number1) + parseInt(number2);

    if ( (number1 < min1 || number1 > max1) && (number2 < min2 || number2 > max2) ) {
      setMessage('Number1 should be in [10, 20]\n Number2 should be in [100, 200]')
    } else if ( number1 < min1 || number1 > max1 ){
      setMessage('Number1 should be in [10, 20]')
    } else if ( number2 < min2 || number2 > max2 ){
      setMessage('Number2 should be in [100, 200]')
    } else if (Number.isInteger(number1) || Number.isInteger(number2)) {
      setMessage('Not an integer')
    } else {
      setMessage(total.toString())
    }

  }


  function GetFirstNumber(input) {
    const inputNumber = input || '';
    setNumber1(inputNumber)
  }

  function GetSecondNumber(input2) {
    const inputNumber2 = input2 || '';
    setNumber2(inputNumber2)
  }


  return (

    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>
        IS657 Midterm
      </Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>
          Number1 [10 to 20]
        </Text>

        <View style={styles.formatInputBox}>
        <TextInput style={styles.inputBox}
        onChangeText={GetFirstNumber}
          value={number1.toString()}
          keyboardType='numeric'>
        </TextInput>
        </View>
      </View>

      <View style={styles.body}>
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
      
      <View style={styles.body}>
        <Button
          title='CALCULATE SUM'
          onPress = {() => getSum()}>
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
    alignItems: 'flex-start',
    fontSize: 15,    
    fontFamily: 'Helvetica',
    padding: 5,
    borderWidth: 2,
  },

  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },



});
