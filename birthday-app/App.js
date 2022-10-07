import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import from local files
import Datepicker from './components/calendar';

import FirstPage from './components/display';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Display from './components/display';
import Calendar from './components/calendar';
import SecondPage from './components/info';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
<Stack.Screen name="firstpage" component={FirstPage} />
         <Stack.Screen name="secondpage" component={SecondPage} />
        
       
         <Stack.Screen name="calender" component={Calendar} />


        
      </Stack.Navigator>

    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({

});
