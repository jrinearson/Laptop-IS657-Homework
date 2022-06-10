import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const min1 = 10;
  const max1 = 20;
  const min2 = 100;
  const max2 = 200;

  function GetSum(input, input2) {
    const total = parseInt(number1) + parseInt(number2);

    if ( (number1 < min1 || number1 > max1) && (number2 < min2 || number2 > max2) ) {
      setErrorMessage('Number1 should be in [10, 20]\nNumber2 should be in [100, 200]')
    } else if ( isNaN(number1) || isNaN(number2 )){
      setErrorMessage('Number1 should be in [10, 20]\nNumber2 should be in [100, 200]')
    } else if ( number1 < min1 || number1 > max1 ){
      setErrorMessage('Number1 should be in [10, 20]')
    } else if ( number2 < min2 || number2 > max2){
      setErrorMessage('Number2 should be in [100, 200]')
    } else if ( isNaN(number1) || isNaN(number2) ) {
      setErrorMessage('Not an integer')
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
          onPress = {() => GetSum()}>
        </Button>
        
        <View style={styles.sumBox}>
        <Text style={styles.text}>
          {message}
        </Text>
      </View>

      </View>
      <View style={styles.errorBox}>
      <Text style={styles.errorText}>
        {errorMessage}
      </Text>
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

  errorBox: {
    top: 20,
    justifyContent: 'space-between',
    width: '100%',
    

  },

  errorText: {
    color: 'red',
    fontSize: 15,    
    fontFamily: 'Helvetica',
    justifyContent: 'flex-start'
    
  }


});
