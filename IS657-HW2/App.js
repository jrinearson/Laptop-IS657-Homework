import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles/styles';
import React from 'react';

export default function App() {

  const [message, setMessage] = useState ('');
  return (
    // Sets the outer screen container 
    <View style={styles.outerScreenContainer}>

    {/*Sets the outer container for the column */}
      <View style={styles.outerColumnContainer}>

        {/*Column text */}
        <Text style={styles.text}>
          Column
        </Text>
    
        {/*Create view for colum tainers*/}
        <View style={styles.innerColumnContainer}>

          {/*Column child text */}
          <Text style={styles.text}>
            Child
          </Text>
        </View>

       {/*Creates new view for middle column
        container for spacing*/}
        <View style={styles.innerColumnContainerMiddle}>

          {/*Column child text */}
          <Text style={styles.text}>
            Child
          </Text>
        </View>

        {/*Use original column view*/}
        <View style={styles.innerColumnContainer}>
         
          {/*Column child text */}
          <Text style={styles.text}>
            Child
          </Text>
        </View>

      </View>

        {/*Sets the outer row container*/}
        <View style={styles.outerRowcontainer}>

          {/*Puts the row text in its on view so
          it can go on top of the boxes not side by side*/}
          <View style={styles.outerRowText}>

            {/*Row title text*/}
            <Text style={styles.text}>
              Row
            </Text>
          </View>
        
          {/*Sets flex design as row */}
          <View style={styles.rowFlexDesign}>

          {/*Row child text container */}
          <View style={styles.innerRowContainer}>
             
             {/*Row child text */}
            <Text style={styles.text}>
              Child
            </Text>
          </View>

           {/*Creates a new view for middle row
           container for space*/}
          <View style={styles.innerRowContainerMiddle}>
            
            {/*Row child text */}
            <Text style={styles.text}>
              Child
            </Text>
          </View>

          {/*Use original row view*/}
          <View style={styles.innerRowContainer}>

            {/*Column child text */}
            <Text style={styles.text}>
              Child
            </Text>
          </View>

        

        </View>


        </View>

      <StatusBar style="auto" />
    </View>
  );
}

